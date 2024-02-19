import type { DocumentData } from "firebase/firestore";
import { MouseEvent } from "react";

export interface MyFireBaseListUIProps {
  onClickMoveNew: () => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  dataBoards: DocumentData[];
}
