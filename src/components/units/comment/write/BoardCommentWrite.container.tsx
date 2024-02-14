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
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    contents: "",
  });

  const [rating, setRating] = useState<number>(0.0);

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

  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
    console.log(inputs);
  };

  const onClickSubmitComment = async (): Promise<void> => {
    if (!inputs.writer && !inputs.password) {
      alert("작성자 또는 비밀번호를 입력하지 않았습니다.");
      return;
    }

    if (!inputs.contents) {
      alert("내용을 입력해 주세요.");
      return;
    }

    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            ...inputs,
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
    if (!inputs.password) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    if (!inputs.contents) {
      alert("내용을 입력해주세요.");
    }

    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: inputs.contents,
            rating,
          },
          password: inputs.password,
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
      onChangeInputs={onChangeInputs}
      onClickSubmitComment={onClickSubmitComment}
      onClickUpdateComment={onClickUpdateComment}
      isEdit={props.isEdit}
      el={props.el}
      contents={inputs.contents}
      setRating={setRating}
    />
  );
}
