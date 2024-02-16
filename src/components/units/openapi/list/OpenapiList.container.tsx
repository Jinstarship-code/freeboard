import { useEffect, useState } from "react";
import OpenapiListUi from "./OpenapiList.presenter";
import axios from "axios";

export default function OpenapiList() {
  // dog 주소 담을 state
  const [dogs, setDogs] = useState<string[]>([]);

  useEffect(() => {
    const getImgs = async (): Promise<void> => {
      new Array(9).fill(1).forEach(async (_) => {
        const result = await axios.get(
          "https://dog.ceo/api/breeds/image/random",
        );
        setDogs((prev) => [...prev, result.data.message]);
      });
    };

    void getImgs();
  }, []);

  return <OpenapiListUi dogs={dogs} />;
}
