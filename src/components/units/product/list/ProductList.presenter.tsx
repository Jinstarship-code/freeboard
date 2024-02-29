import {
  Container,
  SearchBox,
  SearchButton,
  TopWrapper,
  SearchWrapper,
  SellingOrSelledWrapper,
  ProductWrapper,
  PagesWrapper,
  Button,
  ProductImg,
  ProductDescWrapper,
  PriceDiv,
  ProductDescBottom,
  ProductDescBottomWrapper,
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
      {/* 베스트 상품 들어갈 자리 */}
      <div style={{ borderBottom: "1px solid #bdbdbd", marginTop: "30px" }}>
        {props.productsBoard.map((el, index) => (
          <ProductWrapper key={`${el.id}`}>
            <ProductImg
              src={el.img ? el.img : "/img/sample_180px.jpg"}
              alt="이미지 에러"
            />
            <ProductDescWrapper>
              <div>
                <div style={{ fontWeight: "bold", fontSize: "24px" }}>
                  {el.name}
                </div>
                <div style={{ color: "#4f4f4f" }}>{el.contents}</div>
                <div style={{ color: "#bdbdbd" }}># 태그 # 태그 # 태그</div>
              </div>
              <ProductDescBottomWrapper>
                <ProductDescBottom>
                  <img src="/img/ic_profile-24px.png" alt="프로필 사진" />
                  <div>판매자</div>
                </ProductDescBottom>
                <ProductDescBottom>
                  <img src="/img/ic_favorite-24px.png" alt="heart" />
                  <div>30</div>
                </ProductDescBottom>
              </ProductDescBottomWrapper>
            </ProductDescWrapper>
            <PriceDiv>{el.price.toLocaleString("ko-KR")} 원</PriceDiv>
          </ProductWrapper>
        ))}
      </div>
      <PagesWrapper>
        <Button onClick={props.onClickMoveNewProduct}>
          <img src="/img/ic_create-24px.png" />
          게시물 등록하기
        </Button>
      </PagesWrapper>
    </Container>
  );
}
