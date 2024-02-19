import styled from "@emotion/styled";

export const NewBtn = styled.button`
  background-color: white;
  width: 171px;
  height: 52px;
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  cursor: pointer;
  &:active {
    background-color: lightgreen;
  }
`;

export const NewBtnWrapper = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 100px auto 0px auto;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  width: 20%;
  text-align: center;
`;

export const ColumnHeaderContents = styled.div`
  width: 60%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnBasicTitle = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnBasicContents = styled.div`
  width: 60%;
  text-align: center;
`;

export const ColumnBasicDelete = styled.button`
  width: 10%;
  height: 50%;
  transform: translateY(50%);
  background-color: lightblue;
  border: none;
  cursor: pointer;
`;
