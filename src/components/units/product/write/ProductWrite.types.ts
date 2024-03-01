import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IInputTypes {
  name: string;
  contents: string;
  imgUrl?: string;
  price: number;
}

export interface IProductWriteUIProps {
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onClickSubmit: () => void;
  setFile: Dispatch<SetStateAction<File | undefined>>;
  errorName: string;
  errorPrice: string;
  isActive: boolean;
  imgInfo: string;
}
