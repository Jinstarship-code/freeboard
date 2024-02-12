import { Wrapper, ProfileWrapper } from "./layoutHeader.styles";
import { ILayoutHeaderProps } from "./layoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <Wrapper>
      <div>
        <img
          src="/img/layout/logo.png"
          onClick={props.onClickHome}
          style={{ cursor: "pointer" }}
        />
      </div>
      <ProfileWrapper>
        <div>
          <img src="/img/ic_profile-48px.png" />
        </div>
        <div>
          <img src="/img/layout/ic_more-24px.png" />
        </div>
      </ProfileWrapper>
    </Wrapper>
  );
}
