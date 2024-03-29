import { Modal } from "antd";
import {
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  ErrorDiv,
} from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import DaumPostcodeEmbed from "react-daum-postcode";
import UploadImg from "./UploadImg/UploadImg.container";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      {props.isModalOpen ? (
        <Modal
          title="수정한 내용이 없습니다"
          open={props.isModalOpen}
          onOk={props.toggleModal}
        />
      ) : (
        <></>
      )}

      <Wrapper>
        <Title>게시글 {props.isEdit ? "수정" : "등록"}</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              readOnly={!!props.data?.fetchBoard.writer}
            />
            <ErrorDiv>{props.errorWriter}</ErrorDiv>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password
              type="password"
              placeholder="비밀번호를 작성해주세요."
              onChange={props.onChangePassword}
            />
            <ErrorDiv>{props.errorPassword}</ErrorDiv>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <ErrorDiv>{props.errorTitle}</ErrorDiv>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContent}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <ErrorDiv>{props.errorContent}</ErrorDiv>
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode
              readOnly
              value={
                props.zoneCode !== ""
                  ? props.zoneCode
                  : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
              }
            />
            <>
              <SearchButton onClick={props.toggleAddressModal}>
                우편번호 검색
              </SearchButton>
              {props.isAddressModalOpen ? (
                <Modal
                  title="주소 검색"
                  open={props.isAddressModalOpen}
                  onOk={props.toggleAddressModal}
                  onCancel={props.toggleAddressModal}
                >
                  <DaumPostcodeEmbed onComplete={props.onCompleteAddress} />
                </Modal>
              ) : (
                <></>
              )}
            </>
          </ZipcodeWrapper>
          <Address
            readOnly
            value={
              props.address !== ""
                ? props.address
                : props.data?.fetchBoard.boardAddress?.address ?? ""
            }
          />
          <Address
            placeholder="상세 주소를 입력해 주세요."
            onChange={props.onChangeDetailAddress}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
          />
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeURI}
            defaultValue={props.isEdit ? props.data?.fetchBoard.youtubeUrl : ""}
          />
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          {new Array(3).fill(1).map((data, index) => (
            <UploadImg
              key={`${data}_${index}`}
              onChagneFiles={props.onChangeFiles}
              fileUrls={props.fileUrls}
              index={index}
            />
          ))}
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          <SubmitButton
            onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
