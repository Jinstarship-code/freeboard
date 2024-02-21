import { useRef } from "react";
import type { ChangeEvent } from "react";
import UploadImgUI from "./UploadImg.presenter";
import { UploadImgProps } from "./UploadImg.types";
import { checkValidationFile } from "../../../../../commons/libraries/validationFile";

export default function UploadImg(props: UploadImgProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target?.files?.[0] === undefined) return;

    const file: File = event.target.files?.[0];

    if (!checkValidationFile(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      props.onChagneFiles(file, props.index, data.target?.result as string);
    };
  };

  return (
    <UploadImgUI
      fileRef={fileRef}
      fileUrl={props.fileUrls[props.index]}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
