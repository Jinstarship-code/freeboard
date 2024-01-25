import { FETCH_BOARDS } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS);

  const router = useRouter();

  const onClickMove = (event) => {
    router.push(`boards/${event.target.id}`);
  };

  const onClickMoveNew = (event) => {
    router.push(`boards/new`);
  };
  return (
    <>
      <BoardListUI
        data={data}
        onClickMove={onClickMove}
        onClickMoveNew={onClickMoveNew}
      />
    </>
  );
}
