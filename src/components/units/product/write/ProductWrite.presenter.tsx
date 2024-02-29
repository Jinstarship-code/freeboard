import {
  Wrapper,
  Title,
  InputWrapper,
  Label,
  Input,
  LabelWrapper,
  Contents,
} from "./ProductWrite.types";

export default function ProductWriteUI() {
  return (
    <>
      <Wrapper>
        <Title>상품 등록하기</Title>
        <LabelWrapper>
          <InputWrapper>
            <Label>상품명</Label>
            <Input
              type="text"
              placeholder="상품명을 작성해주세요."
              id="writer"
            />
            {/* <ErrorDiv>{props.errorWriter}</ErrorDiv> */}
          </InputWrapper>
        </LabelWrapper>
        <LabelWrapper>
          <Contents />
        </LabelWrapper>
        <LabelWrapper>
          <InputWrapper>
            <Label>판매 가격</Label>
            <Input
              type="number"
              placeholder="판매가격을 입력해주세요."
              id="writer"
            />
            {/* <ErrorDiv>{props.errorWriter}</ErrorDiv> */}
          </InputWrapper>
        </LabelWrapper>
        <LabelWrapper>
          <InputWrapper>
            <Label>상품명</Label>
            <Input type="text" placeholder="#태그 #태그 #태그" id="writer" />
            {/* <ErrorDiv>{props.errorWriter}</ErrorDiv> */}
          </InputWrapper>
        </LabelWrapper>
      </Wrapper>
    </>
  );
}
