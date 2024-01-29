import {
  Container,
  CommentHeaderWrapper,
  CommentHeader,
  RatingWrapper,
  CommentWriterWrapper,
  CommentButtonWrapper,
} from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <Container>
      {props.isEdit ?? (
        <CommentHeaderWrapper>
          <img src="/img/rate_review-24px.png" />
          <CommentHeader>댓글</CommentHeader>
        </CommentHeaderWrapper>
      )}
      <RatingWrapper>
        <input
          type="text"
          placeholder="작성자"
          onChange={props.onChangeWriter}
          defaultValue={props.el?.writer ?? ""}
          readOnly={!!props.el?.writer}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
        />
        <img src="/img/starrating.png" />
      </RatingWrapper>
      <CommentWriterWrapper>
        <textarea
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
          maxLength={100}
        />
        <CommentButtonWrapper>
          <div>0/100</div>
          <button
            onClick={
              props.isEdit
                ? props.onClickUpdateComment
                : props.onClickSubmitComment
            }
          >
            {props.isEdit ? "수정" : "등록"}하기
          </button>
        </CommentButtonWrapper>
      </CommentWriterWrapper>
    </Container>
  );
}
