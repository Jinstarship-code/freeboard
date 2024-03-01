import { gql, useMutation } from "@apollo/client";
import SignUpUI from "./Signup.presenter";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { ISignUpInput } from "./Signup.types";
import { useRouter } from "next/router";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

export default function SignUp() {
  const [inputs, setInputs] = useState<ISignUpInput>({
    email: "",
    password: "",
    name: "",
  });
  const [cmpPassword, setCmpPassword] = useState("");

  const router = useRouter();
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeCmpPassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setCmpPassword(event?.target.value);
  };

  const onClickSubmit = () => {
    if (inputs.password !== cmpPassword) {
      alert("패스워드가 틀렸습니다. 다시 입력해주세요.");
      return;
    }

    if (!inputs.email && !inputs.password && !inputs.email) {
      alert("다시 입력해주세요");
      return;
    }

    createUser({
      variables: {
        createUserInput: { ...inputs },
      },
    });

    router.push("/login");
  };

  console.log(inputs);

  return (
    <SignUpUI
      onChangeInputs={onChangeInputs}
      onChangeCmpPassword={onChangeCmpPassword}
      onClickSubmit={onClickSubmit}
    />
  );
}
