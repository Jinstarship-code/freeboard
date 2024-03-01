import type { ChangeEvent, Dispatch, RefObject, SetStateAction } from "react";

export interface UploadImgProps {
  key: string;
  imgInfo: string;
  setFile: Dispatch<SetStateAction<File | undefined>>;
}

export interface UploadImgUIProps {
  fileRef: RefObject<HTMLInputElement>;
  imgInfo: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
