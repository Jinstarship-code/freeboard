import LayoutBannerUI from "./layoutBanner.presenter";

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return <LayoutBannerUI settings={settings} />;
}
