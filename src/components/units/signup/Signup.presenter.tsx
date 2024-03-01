import {
  ButtonWrapper,
  InputWrapper,
  Label,
  Password,
  SubmitButton,
  Title,
  Wrapper,
  Writer,
} from "./Signup.styles";
import { ISignUpUIProps } from "./Signup.types";

export default function SignUpUI(props: ISignUpUIProps) {
  return (
    <>
      <Wrapper>
        <Title>회원 등록</Title>
        <InputWrapper>
          <Label>이메일</Label>
          <Password
            type="text"
            id="email"
            placeholder="이메일을 입력해주세요."
            onChange={props.onChangeInputs}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>닉네임</Label>
          <Writer
            type="text"
            id="name"
            placeholder="사용하실 닉네임을 입력해주세요."
            onChange={props.onChangeInputs}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangeInputs}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호 확인</Label>
          <Password
            type="password"
            placeholder="비밀번호를 재입력해주세요."
            onChange={props.onChangeCmpPassword}
          />
        </InputWrapper>
        <ButtonWrapper>
          <SubmitButton onClick={props.onClickSubmit}>등록하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
