import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  const boardId =
    typeof router.query.boardId === "string" ? router.query.boardId : "";

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId,
      },
    },
  );

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  // onClick Functions
  const onClickMoveEdit = () => {
    router.push(`/boards/${boardId}/edit`);
  };

  const onClickMoveList = () => {
    router.push(`/boards`);
  };

  const onClickDeleteBoard = async () => {
    await deleteBoard({
      variables: { boardId },
    });

    router.push(`/boards`);
  };

  if (typeof boardId !== "string") return <></>;

  return (
    <BoardDetailUI
      data={data}
      onClickMoveEdit={onClickMoveEdit}
      onClickMoveList={onClickMoveList}
      onClickDeleteBoard={onClickDeleteBoard}
    />
  );
}
