import type { IPagination01UIProps } from "./Pagination01.types";
import { Page } from "./Pagination01.styles";
export default function Pagination01UI(props: IPagination01UIProps) {
  return (
    <>
      <div onClick={props.onClickPrevPage}>{"<"}</div>
      {new Array(10).fill(1).map((_, index) => (
        <Page
          isActive={index + props.startPage === props.ActivedPage}
          key={index}
          id={String(index + props.startPage)}
          onClick={props.onClickMovePage}
        >
          {index + props.startPage}
        </Page>
      ))}
      <div onClick={props.onClickNextPage}>{">"}</div>
    </>
  );
}
