import { useState } from "react";
import type { ChangeEvent } from "react";
import LoginUI from "./login.presenter";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../commons/stores/recoil";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEamil = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    if (!email || !password) {
      alert("제대로 입력해 주세요");
      return;
    }
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });

      const accessToken = result.data?.loginUser.accessToken;
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다.");
        return;
      }

      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      router.push("/boards");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickSignUp = () => {
    router.push("/signup");
  };

  return (
    <LoginUI
      onChangeEamil={onChangeEamil}
      onChangePassword={onChangePassword}
      onClickSignUp={onClickSignUp}
      onClickLogin={onClickLogin}
    />
  );
}
