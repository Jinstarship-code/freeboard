import { Wrapper, Container } from "./layoutNav.styles";
import { ILayoutNavProps } from "./layoutNav.types";

const NAVIGATION_MENUS = [
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/products" },
  { name: "마이페이지", page: "/boards" },
];

export default function LayoutNavUI(props: ILayoutNavProps) {
  return (
    <Wrapper>
      <Container>
        {NAVIGATION_MENUS.map((item) => (
          <div id={item.page} key={item.page} onClick={props.onClickNavMove}>
            {item.name}
          </div>
        ))}
      </Container>
    </Wrapper>
  );
}
