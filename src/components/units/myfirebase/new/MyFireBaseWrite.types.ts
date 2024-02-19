import { ChangeEvent } from "react";

export interface MyFireBaseWriteProps {
  onClickSubmit: () => void;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  errorWriter: string;
  errorTitle: string;
  errorContent: string;
  isActive: boolean;
}

export interface MyInputsType {
  writer: string;
  title: string;
  contents: string;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
