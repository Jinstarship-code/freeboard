import { useRouter } from "next/router";
import LayoutHeaderUI from "./layoutHeader.presenter";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../stores/recoil";

export default function LayoutHeader() {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  const onClickHome = () => {
    router.push(`/boards`);
  };

  const onClickMove = () => {
    if (accessToken) {
      router.push("/mypage");
    }

    router.push("/login");
  };

  return <LayoutHeaderUI onClickHome={onClickHome} onClickMove={onClickMove} />;
}
