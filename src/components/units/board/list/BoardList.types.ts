import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import type { IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveNew: () => void;
  onClickMove: (event: MouseEvent<HTMLDivElement>) => void;
  lastPage: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}
