import { useState } from "react";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  FETCH_BOARDCOMMENTS,
  DELETE_BOARDCOMMENTS,
} from "./BoardCommentList.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardCommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDCOMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const [deleteBoardComment] = useMutation(DELETE_BOARDCOMMENTS);

  const onClickDeleteComment = async (event) => {
    let password = prompt("비밀번호를 입력해주세요.");

    await deleteBoardComment({
      variables: {
        password: String(password),
        boardCommentId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARDCOMMENTS,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  console.log(data);
  return (
    <BoardCommentListUI
      data={data}
      onClickDeleteComment={onClickDeleteComment}
    />
  );
}
