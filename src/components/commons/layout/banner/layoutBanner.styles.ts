import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  height: 400px;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("/img/layout/bannerback.png");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
`;

export const MySlider = styled(Slider)`
  color: white;
  width: 400px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SliderContentsWrapper = styled.div`
  padding: 0 10px 0 10px;
`;

export const SliderTitle = styled.div`
  font-weight: bold;
  font-size: 48px;
  margin-bottom: 30px;
`;

export const SliderContent = styled.div`
  font-size: 12px;
`;
