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
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import { useState } from "react";
import { IBoardCommentListItemProps } from "./BoardCommentList.types";

export default function BoardCommentListItem(
  props: IBoardCommentListItemProps
) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit && (
        <Container key={props.el?._id}>
          <ProfileWrapper>
            <img src="/img/ic_profile-56px.png" alt="프로필" />
          </ProfileWrapper>
          <ContentsWrapper>
            <HeaderCommentWrapper>
              <Name>{props.el?.writer}</Name>
              <img src="/img/starrating.png" />
            </HeaderCommentWrapper>
            <Comment>{props.el?.contents}</Comment>
            <CommentCreatedAtDiv>
              {String(props.el?.createdAt)
                .substring(0, 10)
                .replaceAll("-", ".")}
            </CommentCreatedAtDiv>
          </ContentsWrapper>
          <EDButtonWrapper id={props.el?._id}>
            <img
              id={props.el?._id}
              src="/img/mode-24px.png"
              onClick={onClickUpdate}
            />
            <img
              id={props.el?._id}
              src="/img/clear-24px.png"
              onClick={props.onClickDeleteComment}
            />
          </EDButtonWrapper>
        </Container>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
