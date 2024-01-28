import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDeleteComment: (event: MouseEvent<HTMLImageElement>) => void;
}

export interface IBoardCommentListItemProps {
  key: string;
  el: any;
  onClickDeleteComment: (event: MouseEvent<HTMLImageElement>) => void;
}
