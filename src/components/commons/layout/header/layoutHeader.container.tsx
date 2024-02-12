import { useRouter } from "next/router";
import LayoutHeaderUI from "./layoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickHome = () => {
    router.push(`/boards`);
  };

  return <LayoutHeaderUI onClickHome={onClickHome} />;
}
