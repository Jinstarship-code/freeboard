import {
  Container,
  ProfileWrapper,
  ContentsWrapper,
  HeaderCommentWrapper,
  Name,
  Comment,
  CommentCreatedAtDiv,
  EDButtonWrapper,
} from "./BoardCommentList.styles";

export default function BoardCommentListUI(props) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <Container key={el?._id}>
          <ProfileWrapper>
            <img src="/img/ic_profile-56px.png" alt="프로필" />
          </ProfileWrapper>
          <ContentsWrapper>
            <HeaderCommentWrapper>
              <Name>{el?.writer}</Name>
              <img src="/img/starrating.png" />
            </HeaderCommentWrapper>
            <Comment>{el?.contents}</Comment>
            <CommentCreatedAtDiv>
              {String(el?.createdAt).substring(0, 10).replaceAll("-", ".")}
            </CommentCreatedAtDiv>
          </ContentsWrapper>
          <EDButtonWrapper id={el?._id}>
            <img id={el?._id} src="/img/mode-24px.png" />
            <img
              id={el?._id}
              src="/img/clear-24px.png"
              onClick={props.onClickDeleteComment}
            />
          </EDButtonWrapper>
        </Container>
      ))}
    </>
  );
}
