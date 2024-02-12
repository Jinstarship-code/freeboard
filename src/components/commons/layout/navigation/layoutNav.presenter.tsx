import { Wrapper, Container, VerticalDiv } from "./layoutNav.styles";

export default function LayoutNavUI() {
  return (
    <Wrapper>
      <Container>
        <div>자유게시판</div>
        <VerticalDiv>|</VerticalDiv>
        <div>중고마켓</div>
        <VerticalDiv>|</VerticalDiv>
        <div>마이페이지</div>
      </Container>
    </Wrapper>
  );
}
