import {
  Background,
  Wrapper,
  MySlider,
  SliderContentsWrapper,
  SliderTitle,
  SliderContent,
} from "./layoutBanner.styles";

export default function LayoutBannerUI(props: any) {
  return (
    <Wrapper>
      <Background>
        <MySlider {...props.settings}>
          <SliderContentsWrapper>
            <SliderTitle>carousel Design</SliderTitle>
            <SliderContent>
              캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
              같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고
              각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
            </SliderContent>
          </SliderContentsWrapper>
          <SliderContentsWrapper>
            <SliderTitle>carousel Design</SliderTitle>
            <SliderContent>
              캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
              같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고
              각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
            </SliderContent>
          </SliderContentsWrapper>
          <SliderContentsWrapper>
            <SliderTitle>carousel Design</SliderTitle>
            <SliderContent>
              캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
              같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고
              각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
            </SliderContent>
          </SliderContentsWrapper>
          <SliderContentsWrapper>
            <SliderTitle>carousel Design</SliderTitle>
            <SliderContent>
              캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
              같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고
              각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
            </SliderContent>
          </SliderContentsWrapper>
          <SliderContentsWrapper>
            <SliderTitle>carousel Design</SliderTitle>
            <SliderContent>
              캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
              같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고
              각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
            </SliderContent>
          </SliderContentsWrapper>
        </MySlider>
      </Background>
    </Wrapper>
  );
}
