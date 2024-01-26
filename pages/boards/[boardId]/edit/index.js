import BoardWrite from "/src/components/units/board/write/BoardWrite.container";
import { FETCH_BOARD } from "/src/components/units/board/detail/BoardDetail.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardWriteEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  return <BoardWrite data={data} />;
}