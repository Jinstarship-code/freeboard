import { useState, type MouseEvent } from "react";
import Pagination01UI from "./Pagination01.presenter";
import type { IPagination01Props } from "./Pagination01.types";

export default function Pagination01(props: IPagination01Props) {
  const [startPage, setStartPage] = useState(1);
  const [ActivedPage, setActivedPage] = useState(1);

  const onClickMovePage = (event: MouseEvent<HTMLSpanElement>): void => {
    setActivedPage(Number(event.currentTarget.id));
    void props.refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivedPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > props.lastPage) return;

    setActivedPage(startPage + 10);
    setStartPage(startPage + 10);
    void props.refetch({ page: startPage + 10 });
  };
  return (
    <Pagination01UI
      startPage={startPage}
      lastPage={props.lastPage}
      ActivedPage={ActivedPage}
      onClickMovePage={onClickMovePage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
