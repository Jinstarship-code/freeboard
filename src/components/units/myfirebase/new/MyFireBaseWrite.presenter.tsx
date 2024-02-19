import {
  Wrapper,
  Title,
  WriterWrapper,
  InputWrapper,
  Label,
  Writer,
  ErrorDiv,
  Subject,
  Contents,
  ButtonWrapper,
  SubmitButton,
} from "./MyFireBaseWrite.styles";
import { MyFireBaseWriteProps } from "./MyFireBaseWrite.types";

export default function MyFireBaseWriteUI(props: MyFireBaseWriteProps) {
  return (
    <>
      <Wrapper>
        <Title>게시글 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeInputs}
              id="writer"
            />
            <ErrorDiv>{props.errorWriter}</ErrorDiv>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeInputs}
            id="title"
          />
          <ErrorDiv>{props.errorTitle}</ErrorDiv>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeInputs}
            id="contents"
          />
          <ErrorDiv>{props.errorContent}</ErrorDiv>
        </InputWrapper>

        <ButtonWrapper>
          <SubmitButton onClick={props.onClickSubmit} isActive={props.isActive}>
            등록 하기
          </SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
