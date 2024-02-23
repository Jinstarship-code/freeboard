import styled from "@emotion/styled";
import type { IPageProps } from "./Pagination01.types";

export const Page = styled.span`
  color: ${(props: IPageProps) => (props.isActive ? "#edacb1" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "nomal0")};
  margin: 0 30px;
`;
