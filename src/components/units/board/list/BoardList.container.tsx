import { FETCH_BOARDS } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

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
      />
    </>
  );
}
