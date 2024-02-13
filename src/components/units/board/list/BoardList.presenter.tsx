import Pagination01 from "../../../commons/pagination/01/Pagination01.container";
import {
  Container,
  SearchWrapper,
  SearchBox,
  DateInputWrapper,
  SearchButton,
  ListWrapper,
  Row,
  ColumnHeader,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnBasicTitle,
  TableTop,
  TableBottom,
  PagesWrapper,
  Button,
} from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <Container>
      <SearchWrapper>
        <SearchBox>
          <input type="text" placeholder="제목을 검색해주세요" />
        </SearchBox>
        <DateInputWrapper>
          <div>YYYY.MM.DD ~ YYYY.MM.DD</div>
        </DateInputWrapper>
        <SearchButton>검색하기</SearchButton>
      </SearchWrapper>
      <TableTop />
      <ListWrapper>
        <Row>
          <ColumnHeader>번호</ColumnHeader>
          <ColumnHeaderTitle>제목</ColumnHeaderTitle>
          <ColumnHeader>작성자</ColumnHeader>
          <ColumnHeader>닐짜</ColumnHeader>
        </Row>
        {props.data?.fetchBoards.map((el, index) => (
          <Row key={el._id}>
            <ColumnBasic>{index + 1}</ColumnBasic>
            <ColumnBasicTitle id={el._id} onClick={props.onClickMove}>
              {el.title}
            </ColumnBasicTitle>
            <ColumnBasic>{el.writer}</ColumnBasic>
            <ColumnBasic>
              {String(el.createdAt).substring(0, 10).replaceAll("-", ".")}
            </ColumnBasic>
          </Row>
        ))}
      </ListWrapper>
      <TableBottom />
      <PagesWrapper>
        <Pagination01 refetch={props.refetch} lastPage={props.lastPage} />
        <Button onClick={props.onClickMoveNew}>
          <img src="/img/ic_create-24px.png" />
          게시물 등록하기
        </Button>
      </PagesWrapper>
    </Container>
  );
}
