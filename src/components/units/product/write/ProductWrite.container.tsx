import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import ProductWriteUI from "./ProductWrite.presenter";
import { IInputTypes } from "./ProductWrite.types";
import { useRouter } from "next/router";
import { addDoc, collection } from "firebase/firestore";
import { myDB } from "../../../../commons/libraries/firebase";

export default function ProductWrite() {
  const [inputs, setInputs] = useState<IInputTypes>({
    name: "",
    contents: "",
    price: 0,
  });

  const [errorName, setErrorName] = useState<string>("");
  const [errorPrice, setErrorPrice] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const router = useRouter();

  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setInputs((prev) => ({
      ...prev,

      [event.target.id]:
        event.target.id === "price"
          ? Number(event.target.value)
          : event.target.value,
    }));

    // error check
    if (errorName && event.target.id === "name" && event.target.value)
      setErrorName("");
    if (errorPrice && event.target.id === "price" && event.target.value)
      setErrorPrice("");
  };

  const onClickSubmit = (): void => {
    if (!inputs.name) {
      setErrorName("* 제품명을 입력해 주세요");
    }

    if (!inputs.price) {
      setErrorPrice("* 가격을 입력해주세요(1 ~ )");
    }

    if (inputs.name && inputs.price) {
      const product = collection(myDB, "product");
      void addDoc(product, {
        ...inputs,
      });
    }

    router.push("/products");
  };

  useEffect(() => {
    if (inputs.name && inputs.contents && inputs.price) setIsActive(true);
    else setIsActive(false);
  }, [inputs]);

  return (
    <ProductWriteUI
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      errorName={errorName}
      errorPrice={errorPrice}
      isActive={isActive}
    />
  );
}
