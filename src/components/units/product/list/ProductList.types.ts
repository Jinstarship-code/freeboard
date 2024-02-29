import type { DocumentData } from "firebase/firestore";

export interface IProductListUIProps {
  productsBoard: DocumentData[];
  onClickMoveNewProduct: () => void;
}
