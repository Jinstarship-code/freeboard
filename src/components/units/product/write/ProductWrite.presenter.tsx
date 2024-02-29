import {
  Wrapper,
  Title,
  InputWrapper,
  Label,
  Input,
  LabelWrapper,
  Contents,
  UploadButton,
  ErrorDiv,
} from "./ProductWrite.styles";
import { IProductWriteUIProps } from "./ProductWrite.types";

export default function ProductWriteUI(props: IProductWriteUIProps) {
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
              id="name"
              onChange={props.onChangeInputs}
            />
            <ErrorDiv>{props.errorName}</ErrorDiv>
          </InputWrapper>
        </LabelWrapper>
        <LabelWrapper>
          <InputWrapper>
            <Label>상품 설명</Label>
            <Contents onChange={props.onChangeInputs} id="contents" />
          </InputWrapper>
        </LabelWrapper>
        <LabelWrapper>
          <InputWrapper>
            <Label>판매 가격</Label>
            <Input
              type="number"
              placeholder="판매가격을 입력해주세요."
              id="price"
              onChange={props.onChangeInputs}
            />
            <ErrorDiv>{props.errorPrice}</ErrorDiv>
          </InputWrapper>
        </LabelWrapper>
        <LabelWrapper>
          <InputWrapper>
            <Label>상품명</Label>
            <Input type="text" placeholder="#태그 #태그 #태그" id="writer" />
            {/* <ErrorDiv>{props.errorWriter}</ErrorDiv> */}
          </InputWrapper>
        </LabelWrapper>
        <div style={{ marginTop: "30px" }}>
          <UploadButton onClick={props.onClickSubmit}>등록하기</UploadButton>
        </div>
      </Wrapper>
    </>
  );
}
