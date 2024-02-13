import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  margin: 100px auto 0px auto;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBox = styled.div`
  width: 776px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  height: 100%;

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

export const DateInputWrapper = styled.div`
  height: 100%;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  color: #bdbdbd;
  display: flex;
  flex-direction: row-gap;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
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

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableTop = styled.div`
  border-top: 1px solid black;
  margin-top: 30px;
`;

export const TableBottom = styled.div`
  border-bottom: 1px solid black;
`;
export const Row = styled.div`
  height: 52px;
  line-height: 52px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bdbdbd;
`;
export const ColumnHeader = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnBasicTitle = styled.div`
  width: 70%;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export const PagesWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  background-color: white;
  width: 171px;
  height: 52px;
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;
