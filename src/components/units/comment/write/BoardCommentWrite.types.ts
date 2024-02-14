import { ChangeEvent, Dispatch, SetStateAction, MouseEvent } from "react";

export interface IBoardCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: any;
}

export interface IBoardCommentWriteUIProps {
  // onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onClickSubmitComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdateComment: (event: MouseEvent<HTMLButtonElement>) => void;
  isEdit?: boolean;
  el?: any;
  contents?: string;
  setRating: Dispatch<SetStateAction<number>>;
}
