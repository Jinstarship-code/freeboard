import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  /* height: 1847px; */
  box-sizing: border-box;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 100px 0px 0px 0px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const SellerDiv = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const DateDiv = styled.div`
  font-size: 16px;
  color: #828282;
`;

export const LinkWrapper = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
`;

export const StyledImg = styled.img`
  object-fit: none;
  cursor: pointer;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

export const Contents = styled.div`
  margin-top: 50px;
  font-size: 16px;
`;

export const LikeDislikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  width: 100%;
  justify-content: space-around;
  text-align: center;
  padding-left: 45%;
  padding-right: 45%;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-right: 30px;
  height: 51px;
  width: 40px;
`;

export const DislikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-left: 30px;
  height: 51px;
  width: 40px;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  margin: 100px 0px 0px 0px;
  padding: 0px 200px 0px 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 14px 60px 14px 60px;
  border: 1px solid #bdbdbd;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }
`;
