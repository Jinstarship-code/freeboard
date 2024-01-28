import {
  IQuery,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IMyVariables {
  boardId: string;
  password: string;
  updateBoardInput: IUpdateBoardInput;
}

export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  errorWriter: string;
  errorPassword: string;
  errorTitle: string;
  errorContent: string;
  isActive: boolean;
  isEdit: boolean;
  data?: any;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
