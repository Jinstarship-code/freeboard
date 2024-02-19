import { useEffect, useState } from "react";
import MyFireBaseListUI from "./MyFireBaseList.presenter";
import { useRouter } from "next/router";
import {
  DocumentData,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { myDB } from "../../../../commons/libraries/firebase";
import type { MouseEvent } from "react";

export default function MyFireBaseList(): JSX.Element {
  const router = useRouter();
  const [dataBoards, setDateBoards] = useState<DocumentData[]>([]);
  // DocumentData[]
  const onClickDelete = async (
    e: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    const { id } = e.target as HTMLButtonElement;

    await deleteDoc(doc(myDB, "board", id));
  };

  useEffect(() => {
    const fetchBoards = async (): Promise<void> => {
      const board = collection(myDB, "board");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => {
        const tmp = { ...el.data(), id: el.id };
        return tmp;
      });
      setDateBoards(boards);
    };
    void fetchBoards();
  }, [onClickDelete]);

  const onClickMoveNew = () => {
    router.push(`/myfirebase/new`);
  };

  return (
    <MyFireBaseListUI
      onClickMoveNew={onClickMoveNew}
      dataBoards={dataBoards}
      onClickDelete={onClickDelete}
    />
  );
}
