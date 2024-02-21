import { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface IPagination01Props {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  lastPage: number;
}

export interface IPagination01UIProps {
  startPage: number;
  ActivedPage: number;
  lastPage: number;
  onClickMovePage: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPrevPage: (event: MouseEvent<HTMLDivElement>) => void;
  onClickNextPage: (event: MouseEvent<HTMLDivElement>) => void;
}
