import { useState } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { CREATE_BOARDCOMMENT } from "./BoardCommentWrite.queries";
import { FETCH_BOARDCOMMENTS } from "../list/BoardCommentList.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardCommentWrite(props) {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [rating, setRatring] = useState(3.5);
  const [contents, setContents] = useState("");

  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARDCOMMENT);

  let wordLength = 0;

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeRating = (event) => {
    setRatring(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    wordLength = String(contents).length;
  };

  const onClickSubmitComment = async (event) => {
    if (!writer && !password) {
      alert("작성자 또는 비밀번호를 입력하지 않았습니다.");
      return;
    }

    if (!contents) {
      alert("내용을 입력해 주세요.");
      return;
    }

    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDCOMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      wordLength={wordLength}
      onClickSubmitComment={onClickSubmitComment}
    />
  );
}
