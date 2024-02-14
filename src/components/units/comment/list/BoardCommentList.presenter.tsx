import BoardCommentListItem from "./BoardCommentList.presenterItem";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentListUI(
  props: IBoardCommentListUIProps,
): JSX.Element {
  return (
    <>
      <div style={{ height: "700px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          hasMore={true}
          loadMore={props.onLoadPage}
        >
          {props.data?.fetchBoardComments.map((el) => (
            <BoardCommentListItem
              key={el._id}
              el={el}
              onClickDeleteComment={props.onClickDeleteComment}
            />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
