import { ChangeEvent, useEffect, useState } from "react";
import { myDB } from "../../../../commons/libraries/firebase";
import MyFireBaseWriteUI from "./MyFireBaseWrite.presenter";
import { collection, addDoc } from "firebase/firestore";
import { MyInputsType } from "./MyFireBaseWrite.types";
import { useRouter } from "next/router";

// todo   # create 할때, doc에 특정한 순서를 넣어주지않아 자동으로 id가 생성되는데,
// todo   # 그래서, id가 뒤죽박죽 생성되서 data를 보여줄때 순서대로 정렬 되지 않는다.
// todo   # 따라서, 나중에 순서대로 넣어주는 작업을 해야할듯

export default function MyFireBaseWrite() {
  const [inputs, setInputs] = useState<MyInputsType>({
    writer: "",
    title: "",
    contents: "",
  });

  const [errorWriter, setErrorWriter] = useState<string>("");
  const [errorTitle, setErrorTitle] = useState<string>("");
  const [errorContent, setErrorContent] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);

  const router = useRouter();
  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));

    if (errorWriter && event.target.id === "writer" && event.target.value)
      setErrorWriter("");
    if (errorTitle && event.target.id === "title" && event.target.value)
      setErrorTitle("");
    if (errorContent && event.target.id === "contents" && event.target.value)
      setErrorContent("");
  };

  const onClickSubmit = (): void => {
    if (!inputs.writer) {
      setErrorWriter("* 작성자를 입력해 주세요");
    }

    if (!inputs.title) {
      setErrorTitle("* 제목을 입력해 주세요.");
    }

    if (!inputs.contents) {
      setErrorContent("* 내용을 입력해 주세요.");
    }

    if (inputs.writer && inputs.title && inputs.contents) {
      const board = collection(myDB, "board");
      void addDoc(board, {
        ...inputs,
      });
    }

    router.push("/myfirebase");
  };

  useEffect(() => {
    if (inputs.writer && inputs.title && inputs.contents) setIsActive(true);
    else setIsActive(false);
  }, [inputs]);

  return (
    <MyFireBaseWriteUI
      onClickSubmit={onClickSubmit}
      onChangeInputs={onChangeInputs}
      errorWriter={errorWriter}
      errorTitle={errorTitle}
      errorContent={errorContent}
      isActive={isActive}
    />
  );
}
