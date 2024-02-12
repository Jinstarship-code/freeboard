import LayoutBanner from "./banner/layoutBanner.container";
import LayoutFooter from "./footer";
import LayoutHeader from "./header/layoutHeader.container";
import LayoutNav from "./navigation/layoutNav.container";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNav />
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
