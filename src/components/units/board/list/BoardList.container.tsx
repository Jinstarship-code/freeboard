import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: boardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((boardCount?.fetchBoardsCount ?? 10) / 10);

  const onClickMove = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement) {
      router.push(`/boards/${event.target.id}`);
    }
  };

  const onClickMoveNew = () => {
    router.push(`/boards/new`);
  };

  return (
    <>
      <BoardListUI
        data={data}
        onClickMove={onClickMove}
        onClickMoveNew={onClickMoveNew}
        lastPage={lastPage}
        refetch={refetch}
      />
    </>
  );
}
