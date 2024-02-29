import { useQuery } from "@apollo/client";
import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { useEffect, useState } from "react";
import { collection, getDocs, type DocumentData } from "firebase/firestore";
import { useRouter } from "next/router";
import { myDB } from "../../../../commons/libraries/firebase";

export default function ProductList(): JSX.Element {
  const router = useRouter();
  const [productsBoard, setProductsBoard] = useState<DocumentData[]>([]);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  useEffect(() => {
    const fetchProduct = async (): Promise<void> => {
      const product = collection(myDB, "product");
      const result = await getDocs(product);
      const products = result.docs.map((el) => {
        const tmp = { ...el.data(), id: el.id };
        return tmp;
      });
      setProductsBoard(products);
    };
    void fetchProduct();
  }, []);

  const onClickMoveNewProduct = () => {
    router.push("/products/new");
  };

  return (
    <ProductListUI data={data} onClickMoveNewProduct={onClickMoveNewProduct} />
  );
}
