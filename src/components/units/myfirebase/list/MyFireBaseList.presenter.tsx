import {} from "../../board/list/BoardList.styles";
import {
  NewBtn,
  NewBtnWrapper,
  Container,
  ListWrapper,
  TableBottom,
  Row,
  ColumnHeader,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnBasicTitle,
  ColumnBasicDelete,
  ColumnHeaderContents,
  ColumnBasicContents,
} from "./MyFireBaseList.styles";

import type { MyFireBaseListUIProps } from "./MyFireBaseList.types";

export default function MyFireBaseListUI(
  props: MyFireBaseListUIProps,
): JSX.Element {
  return (
    <Container>
      <ListWrapper>
        <Row>
          <ColumnHeader>번호</ColumnHeader>
          <ColumnHeaderTitle>제목</ColumnHeaderTitle>
          <ColumnHeaderContents>내용</ColumnHeaderContents>
          <ColumnHeader>작성자</ColumnHeader>
          <ColumnHeader />
        </Row>
        {props.dataBoards.map((el: any, index: number) => (
          <Row key={el.id}>
            <ColumnBasic>{index + 1}</ColumnBasic>
            <ColumnBasicTitle id={String(index)}>{el.title}</ColumnBasicTitle>
            <ColumnBasicContents>{el.contents}</ColumnBasicContents>
            <ColumnBasic>{el.writer}</ColumnBasic>
            <ColumnBasicDelete
              style={{ cursor: "pointer" }}
              onClick={props.onClickDelete}
              id={el.id}
            >
              Delete
            </ColumnBasicDelete>
          </Row>
        ))}
      </ListWrapper>
      <TableBottom />
      <NewBtnWrapper>
        <NewBtn onClick={props.onClickMoveNew}>게시물 등록하기</NewBtn>
      </NewBtnWrapper>
    </Container>
  );
}
