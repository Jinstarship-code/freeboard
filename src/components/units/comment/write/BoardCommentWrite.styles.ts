import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  height: 300px;
  margin: 100px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CommentHeaderWrapper = styled.div`
  width: 6%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CommentHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 550px;
  align-items: center;

  & input {
    width: 180px;
    height: 52px;
    border: 1px solid #bdbdbd;
    background-color: white;
    padding-left: 10px;
  }

  & img {
    object-fit: none;
  }
`;

export const CommentWriterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #bdbdbd;
  color: #bdbdbd;
  background-color: white;
  padding: 10px 0px 0px 5px;

  & textarea {
    width: 100%;
    height: 110px;
    border: none;
    resize: none;
    border-bottom: 1px solid #f2f2f2;
    padding: 0px 0px 0px 5px;
  }

  & textarea:focus {
    outline: none;
  }
`;

export const CommentButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & div {
    padding-left: 10px;
  }
  & button {
    height: 52px;
    width: 91px;
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;
