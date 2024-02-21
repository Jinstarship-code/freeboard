import { MyImg, UploadButton } from "./UploadImg.styles";
import { UploadImgUIProps } from "./UploadImg.types";

export default function UploadImgUI(props: UploadImgUIProps) {
  return (
    <>
      {props.fileUrl ? (
        <MyImg onClick={props.onClickUpload} src={props.fileUrl} />
      ) : (
        <UploadButton onClick={props.onClickUpload}>+</UploadButton>
      )}
      <input
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
        style={{ display: "none" }}
      />
    </>
  );
}
