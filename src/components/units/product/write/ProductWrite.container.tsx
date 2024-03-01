import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import ProductWriteUI from "./ProductWrite.presenter";
import { IInputTypes } from "./ProductWrite.types";
import { useRouter } from "next/router";
import { addDoc, collection } from "firebase/firestore";
import { myDB } from "../../../../commons/libraries/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useRecoilState } from "recoil";
import { fileUrlState, imgInfoState } from "../../../commons/stores/recoil";

export default function ProductWrite() {
  const router = useRouter();

  const [inputs, setInputs] = useState<IInputTypes>({
    name: "",
    contents: "",
    imgUrl: "",
    price: 0,
  });

  const [errorName, setErrorName] = useState<string>("");
  const [errorPrice, setErrorPrice] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [file, setFile] = useState<File>();
  const [fileUrl, setFileUrl] = useRecoilState(fileUrlState);
  const [imgInfo] = useRecoilState(imgInfoState);

  const storage = getStorage();

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

  // const onChangeFile = (file: File, imgInfo: string): void => {
  //   setFile(file);
  //   setImgInfo(imgInfo);

  //   console.log(`In onChangeFile : ${imgInfo}`);
  // };

  const onClickSubmit = async () => {
    if (!inputs.name) {
      setErrorName("* 제품명을 입력해 주세요");
    }

    if (!inputs.price) {
      setErrorPrice("* 가격을 입력해주세요(1 ~ )");
    }

    if (file) {
      const imagesRef = ref(storage, `images/${file.name}`);

      await uploadBytes(imagesRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setFileUrl(url);
        });
      });

      console.log(fileUrl);
      setInputs((prev) => ({ ...prev, imgUrl: fileUrl }));
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
      setFile={setFile}
      isActive={isActive}
      imgInfo={imgInfo}
    />
  );
}
