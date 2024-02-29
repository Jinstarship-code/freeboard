import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ffd600;
  font-size: 16px;
  color: #514400;
  font-weight: bold;
  position: relative;
`;

export const Container = styled.div`
  position: absolute;
  width: 300px;
  display: flex;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & div {
    cursor: pointer;
  }
`;

export const VerticalDiv = styled.div`
  color: white;
`;
