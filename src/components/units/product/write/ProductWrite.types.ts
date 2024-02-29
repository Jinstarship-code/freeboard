import { ChangeEvent } from "react";

export interface IInputTypes {
  name: string;
  contents: string;
  price: number;
}

export interface IProductWriteUIProps {
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onClickSubmit: () => void;
  errorName: string;
  errorPrice: string;
  isActive: boolean;
}
