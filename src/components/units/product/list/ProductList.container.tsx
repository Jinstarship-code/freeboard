import ProductListUI from "./ProductList.presenter";
import { useEffect, useState } from "react";
import { collection, getDocs, type DocumentData } from "firebase/firestore";
import { useRouter } from "next/router";
import { myDB } from "../../../../commons/libraries/firebase";

export default function ProductList(): JSX.Element {
  const router = useRouter();
  const [productsBoard, setProductsBoard] = useState<DocumentData[]>([]);

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

  console.log(productsBoard);

  const onClickMoveNewProduct = () => {
    router.push("/products/new");
  };

  return (
    <ProductListUI
      productsBoard={productsBoard}
      onClickMoveNewProduct={onClickMoveNewProduct}
    />
  );
}
