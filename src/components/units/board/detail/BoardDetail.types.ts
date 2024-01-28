import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveList: () => void;
  onClickMoveEdit: () => void;
  onClickDeleteBoard: () => void;
}
