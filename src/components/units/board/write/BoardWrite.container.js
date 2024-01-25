import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  // useStates
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContent] = useState("");

  // error state
  const [errorWriter, setErrorWriter] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContent, setErrorContent] = useState("");

  // is-- state
  const [isActive, setIsActive] = useState(false);

  // mutation
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  // router
  const router = useRouter();

  //#region onChange Functions
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value) {
      setErrorWriter("");
    }

    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setErrorPassword("");
    }

    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value) {
      setErrorTitle("");
    }

    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
    if (event.target.value) {
      setErrorContent("");
    }

    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  //#endregion

  const onClickSubmit = async () => {
    if (!writer) {
      setErrorWriter("* 작성자를 입력해 주세요");
    }

    if (!password) {
      setErrorPassword("* 비밀번호를 입력해 주세요.");
    }

    if (!title) {
      setErrorTitle("* 제목을 입력해 주세요.");
    }

    if (!contents) {
      setErrorContent("* 내용을 입력해 주세요.");
    }

    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
            },
          },
        });
        console.log(result);
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error);
      }
    } else {
      return;
    }
  };

  const onClickEdit = async () => {
    if (!title && !contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요");
      return;
    }

    const updateBoardInput = {};

    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        onClickSubmit={onClickSubmit}
        onClickEdit={onClickEdit}
        errorWriter={errorWriter}
        errorPassword={errorPassword}
        errorTitle={errorTitle}
        errorContent={errorContent}
        isActive={isActive}
        isEdit={props.isEdit}
        data={props.data}
      />
    </>
  );
}
