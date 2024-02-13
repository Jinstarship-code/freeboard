import { useRouter } from "next/router";
import LayoutNavUI from "./layoutNav.presenter";
import { MouseEvent } from "react";

export default function LayoutNav() {
  const router = useRouter();

  const onClickNavMove = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement) {
      router.push(`${event.target.id}`);
    }
  };

  return <LayoutNavUI onClickNavMove={onClickNavMove} />;
}
