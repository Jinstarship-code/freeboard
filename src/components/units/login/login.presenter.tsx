import {
  ButtonWrapper,
  InputWrapper,
  Label,
  Password,
  LoginButton,
  Title,
  Wrapper,
  SignupButton,
} from "./login.styles";
import type { ILoginUIProps } from "./login.types";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <>
      <Wrapper>
        <Title>로그인</Title>
        <InputWrapper>
          <Label>이메일</Label>
          <Password
            type="text"
            placeholder="이메일을 입력해주세요."
            onChange={props.onChangeEamil}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
          />
        </InputWrapper>
        <ButtonWrapper>
          <LoginButton onClick={props.onClickLogin}>로그인</LoginButton>
          <SignupButton onClick={props.onClickSignUp}>회원가입</SignupButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
