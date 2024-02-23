import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { type ChangeEvent, type MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import _ from "lodash";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: boardCount, refetch: boardCountRefetch } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  // lastPage는 page count를 불러워야함.
  // let lastPage = Math.ceil((boardCount?.fetchBoardsCount ?? 10) / 10);
  const lastPage = Math.ceil((boardCount?.fetchBoardsCount ?? 10) / 10);

  const onClickMove = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement) {
      router.push(`/boards/${event.target.id}`);
    }
  };

  console.log(` lastPage : ${lastPage}`);

  const onClickMoveNew = () => {
    router.push(`/boards/new`);
  };

  const debouncing = _.debounce((value) => {
    refetch({ page: 1, search: value });
    boardCountRefetch({ search: value });
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    debouncing(event.currentTarget.value);
  };

  return (
    <>
      <BoardListUI
        data={data}
        onClickMove={onClickMove}
        onClickMoveNew={onClickMoveNew}
        onChangeSearch={onChangeSearch}
        lastPage={lastPage}
        refetch={refetch}
      />
    </>
  );
}
