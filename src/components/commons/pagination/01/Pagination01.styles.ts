import styled from "@emotion/styled";

interface IPageProps {
  isActive: boolean;
}

export const Page = styled.div`
  color: ${(props: IPageProps) => (props.isActive ? "#edacb1" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "nomal0")};
`;
