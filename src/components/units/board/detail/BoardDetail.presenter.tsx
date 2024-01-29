import {
  Container,
  Wrapper,
  ProfileWrapper,
  ProfileNameWrapper,
  ProfileDetailWrapper,
  SellerDiv,
  DateDiv,
  LinkWrapper,
  StyledImg,
  ContentsWrapper,
  Title,
  Contents,
  LikeDislikeWrapper,
  LikeWrapper,
  DislikeWrapper,
  ButtonsWrapper,
  Button,
} from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <Container>
      <Wrapper>
        <ProfileWrapper>
          <div>
            <ProfileDetailWrapper>
              <img src="/img/ic_profile-56px.png" />
              <ProfileNameWrapper>
                <SellerDiv>{props.data?.fetchBoard?.writer}</SellerDiv>
                <DateDiv>
                  Date :{" "}
                  {String(props.data?.fetchBoard?.createdAt)
                    .substring(0, 10)
                    .replaceAll("-", ".")}
                </DateDiv>
              </ProfileNameWrapper>
            </ProfileDetailWrapper>
          </div>
          <LinkWrapper>
            <StyledImg src="/img/ic_link-32px.png" />
            <StyledImg src="/img/ic_location_on-32px.png" />
          </LinkWrapper>
        </ProfileWrapper>
        <ContentsWrapper>
          <Title>{props.data?.fetchBoard?.title}</Title>
          <Contents>{props.data?.fetchBoard?.contents}</Contents>
          <LikeDislikeWrapper>
            <LikeWrapper>
              <StyledImg src="/img/ic_thumb_up_off_alt-24px.png" />
              <div>{props.data?.fetchBoard?.likeCount}</div>
            </LikeWrapper>
            <DislikeWrapper>
              <StyledImg src="/img/ic_thumb_down-24px.png" />
              <div>{props.data?.fetchBoard?.dislikeCount}</div>
            </DislikeWrapper>
          </LikeDislikeWrapper>
        </ContentsWrapper>
      </Wrapper>
      <ButtonsWrapper>
        <Button onClick={props.onClickMoveList}>목록으로</Button>
        <Button onClick={props.onClickMoveEdit}>수정하기</Button>
        <Button onClick={props.onClickDeleteBoard}>삭제하기</Button>
      </ButtonsWrapper>
    </Container>
  );
}