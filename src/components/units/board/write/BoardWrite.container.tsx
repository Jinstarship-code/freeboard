import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { IBoardWriteProps } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";

export default function BoardWrite(props: IBoardWriteProps) {
  // router
  const router = useRouter();
  // useStates
  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContent] = useState<string>("");

  // error state
  const [errorWriter, setErrorWriter] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [errorTitle, setErrorTitle] = useState<string>("");
  const [errorContent, setErrorContent] = useState<string>("");

  // is-- state
  const [isActive, setIsActive] = useState<boolean>(false);

  // mutation
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const boardId =
    typeof router.query.boardId === "string" ? router.query.boardId : "";

  // #region onChange Functions
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
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

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
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

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
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

  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>): void => {
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
  // #endregion

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

        router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
    if (!boardId) return <></>;
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

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    const result = await updateBoard({
      variables: {
        boardId,
        password,
        updateBoardInput,
      },
    });

    if (!boardId) return <></>;
    router.push(`/boards/${result.data?.updateBoard._id}`);
  };

  return (
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
  );
}
