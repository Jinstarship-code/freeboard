import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  // fetch variables from Graphql
  const writer = data?.fetchBoard.writer;
  const title = data?.fetchBoard.title;
  const contents = data?.fetchBoard.contents;
  const likeCount = data?.fetchBoard.likeCount;
  const dislikeCount = data?.fetchBoard.dislikeCount;
  const createdAt = data?.fetchBoard.createdAt;
  const id = data?.fetchBoard._id;

  // onClick Functions
  const onClickDelete = async (event) => {
    await deleteBoard({
      variables: {
        boardId: event.target.id,
      },
    });
    router.push(`/boards`);
  };

  const onClickMoveEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickMoveList = () => {
    router.push(`/boards`);
  };
  return (
    <>
      <BoardDetailUI
        writer={writer}
        title={title}
        contents={contents}
        likeCount={likeCount}
        dislikeCount={dislikeCount}
        createdAt={createdAt}
        id={id}
        onClickDelete={onClickDelete}
        onClickMoveList={onClickMoveList}
        onClickMoveEdit={onClickMoveEdit}
      />
    </>
  );
}
