import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { IYoutubeProps } from "./BoardDetail.types";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  const boardId =
    typeof router.query.boardId === "string" ? router.query.boardId : "";

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId,
      },
    },
  );
  console.log(data?.fetchBoard);

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

  const onClickLikeBoard = async () => {
    await likeBoard({
      variables: {
        boardId,
      },
      refetchQueries: [{ query: FETCH_BOARD, variables: { boardId } }],
    });
  };

  const onClickDisLikeBoard = async () => {
    await dislikeBoard({
      variables: { boardId },
      refetchQueries: [{ query: FETCH_BOARD, variables: { boardId } }],
    });
  };

  // #region youtube data 가공
  const youtubeProps: IYoutubeProps = {
    videoId: "",
    style: { margin: "100px auto 0px auto" },
  };

  if (data?.fetchBoard.youtubeUrl) {
    youtubeProps.videoId = String(data?.fetchBoard.youtubeUrl).split("v=")[1];
  }

  // #endregion

  if (typeof boardId !== "string") return <></>;

  return (
    <BoardDetailUI
      data={data}
      onClickMoveEdit={onClickMoveEdit}
      onClickMoveList={onClickMoveList}
      onClickDeleteBoard={onClickDeleteBoard}
      onClickLikeBoard={onClickLikeBoard}
      onClickDisLikeBoard={onClickDisLikeBoard}
      youtubeProps={youtubeProps}
    />
  );
}
