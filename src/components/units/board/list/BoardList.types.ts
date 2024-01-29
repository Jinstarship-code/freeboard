import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveNew: () => void;
  onClickMove: (event: MouseEvent<HTMLDivElement>) => void;
}