import type { IPagination01UIProps } from "./Pagination01.types";
import { Page } from "./Pagination01.styles";
export default function Pagination01UI(props: IPagination01UIProps) {
  return (
    <div>
      <span onClick={props.onClickPrevPage}>{"<"}</span>
      {new Array(props.lastPage < 10 ? props.lastPage : 10)
        .fill(1)
        .map((_, index) => (
          <Page
            isActive={index + props.startPage === props.ActivedPage}
            key={index}
            id={String(index + props.startPage)}
            onClick={props.onClickMovePage}
          >
            {index + props.startPage}
          </Page>
        ))}
      <span onClick={props.onClickNextPage}>{">"}</span>
    </div>
  );
}
