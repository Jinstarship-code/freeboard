import { ChangeEvent, useState } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARDCOMMENT,
  UPDATE_BOARDCOMMENT,
} from "./BoardCommentWrite.queries";
import { FETCH_BOARDCOMMENTS } from "../list/BoardCommentList.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { IBoardCommentWriteProps } from "./BoardCommentWrite.types";

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [rating, setRatring] = useState<number>(3.5);
  const rating = 3.5;
  const [contents, setContents] = useState<string>("");

  const router = useRouter();
  const boardId =
    typeof router.query.boardId === "string" ? router.query.boardId : "";

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARDCOMMENT);
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARDCOMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  // TODO rating 배우고나면 type 적용할 것
  // const onChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
  //   setRatring(event.target.value);
  // };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  const onClickSubmitComment = async (): Promise<void> => {
    if (!writer && !password) {
      alert("작성자 또는 비밀번호를 입력하지 않았습니다.");
      return;
    }

    if (!contents) {
      alert("내용을 입력해 주세요.");
      return;
    }

    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
          boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDCOMMENTS,
            variables: { boardId },
          },
        ],
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickUpdateComment = async () => {
    if (!contents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    // TODO rating 배우고 나서는 contents를 객체로 따로 만들고 담아서 보내줘야한다.
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: { contents },
          password,
          boardCommentId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDCOMMENTS,
            variables: { boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  if (!boardId) return <></>;
  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmitComment={onClickSubmitComment}
      onClickUpdateComment={onClickUpdateComment}
      isEdit={props.isEdit}
      el={props.el}
      contents={contents}
    />
  );
}
