import { MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  FETCH_BOARDCOMMENTS,
  DELETE_BOARDCOMMENTS,
} from "./BoardCommentList.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  const boardId =
    typeof router.query.boardId === "string" ? router.query.boardId : "";

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARDCOMMENTS, {
    variables: {
      boardId,
    },
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARDCOMMENTS);

  const onClickDeleteComment = async (event: MouseEvent<HTMLImageElement>) => {
    const password = prompt("비밀번호를 입력해주세요.");

    if (!(event.target instanceof HTMLImageElement)) {
      return <></>;
    }

    await deleteBoardComment({
      variables: {
        password: String(password),
        boardCommentId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARDCOMMENTS,
          variables: { boardId },
        },
      ],
    });
  };

  const onLoadPage = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length ?? 10 / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  if (!boardId) return <></>;

  return (
    <BoardCommentListUI
      data={data}
      onClickDeleteComment={onClickDeleteComment}
      onLoadPage={onLoadPage}
    />
  );
}
