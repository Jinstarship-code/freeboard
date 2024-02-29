import {
  Container,
  SearchBox,
  SearchButton,
  TopWrapper,
  SearchWrapper,
  SellingOrSelledWrapper,
  PagesWrapper,
  Button,
} from "./ProductList.styles";
import { IProductListUIProps } from "./ProductList.types";

export default function ProductListUI(props: IProductListUIProps) {
  return (
    <Container>
      <TopWrapper>
        <SellingOrSelledWrapper>
          <div>판매중인 상품</div>
          <div>판매된 상품</div>
        </SellingOrSelledWrapper>
        <SearchWrapper>
          <SearchBox>
            <input
              type="text"
              placeholder="제품을 검색해주세요"
              style={{ width: "100%" }}
            />
          </SearchBox>
          <SearchButton>검색</SearchButton>
        </SearchWrapper>
      </TopWrapper>
      <PagesWrapper>
        <Button onClick={props.onClickMoveNewProduct}>
          <img src="/img/ic_create-24px.png" />
          게시물 등록하기
        </Button>
      </PagesWrapper>
    </Container>
  );
}
