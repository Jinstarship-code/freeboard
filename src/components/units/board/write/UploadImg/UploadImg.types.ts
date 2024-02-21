import type { ChangeEvent, RefObject } from "react";
export interface UploadImgProps {
  key: string;
  onChagneFiles: (file: File, index: number, url: string) => void;
  fileUrls: string[];
  index: number;
}

export interface UploadImgUIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
