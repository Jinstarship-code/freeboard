import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query {
    fetchUseditems {
      name
      contents
      price
      images
    }
  }
`;
