import BoardCommentListItem from "./BoardCommentList.presenterItem";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListItem
          key={el._id}
          el={el}
          onClickDeleteComment={props.onClickDeleteComment}
        />
      ))}
    </>
  );
}
