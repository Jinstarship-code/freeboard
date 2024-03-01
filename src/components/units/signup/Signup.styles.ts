import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px auto 0px auto;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  font-weight: bold;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 34px;
`;

export const InputWrapper = styled.div`
  margin-top: 40px;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;

  background-color: yellow;
`;
