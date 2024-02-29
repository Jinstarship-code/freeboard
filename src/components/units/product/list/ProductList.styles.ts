import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  margin: 100px auto 0px auto;
`;

export const SearchButton = styled.button`
  height: 100%;
  width: 94px;
  border-radius: 10px;
  padding: 14px 16px;
  gap: 10px;
  background-color: black;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SellingOrSelledWrapper = styled.div`
  width: 16%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  font-size: 18px;

  & div:first-child {
    border-bottom: 2px solid #ffd600;
    font-weight: bold;
  }
`;
export const SearchBox = styled.div`
  width: 776px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  margin-right: 20px;

  & input {
    padding-left: 50px;
    border: none;
    background-image: url("img/ic_search-24px.png");
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: transparent;
    color: #000;
    outline: none;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PagesWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & div {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  background-color: white;
  width: 171px;
  height: 52px;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: yellow;
  }
`;
