import { useRef } from "react";
import type { ChangeEvent } from "react";
import UploadImgUI from "./UploadImg.presenter";
import { UploadImgProps } from "./UploadImg.types";
import { checkValidationFile } from "../../../../../commons/libraries/validationFile";
import { useRecoilState } from "recoil";
import { imgInfoState } from "../../../../commons/stores/recoil";

export default function UploadImg(props: UploadImgProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [imgInfo, setImgInfo] = useRecoilState(imgInfoState);
  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target?.files?.[0] === undefined) return;

    const file: File = event.target.files?.[0];

    if (!checkValidationFile(file)) return;
    props.setFile(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImgInfo(data.target?.result as string);
    };
  };

  return (
    <UploadImgUI
      fileRef={fileRef}
      imgInfo={imgInfo}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
