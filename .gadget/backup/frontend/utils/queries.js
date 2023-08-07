import gql from "graphql-tag";

export const GET_CHARITIES = gql`
  query GetCharities($first: Int!, $after: String) {
    charities(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          name
          causes {
            edges {
              node {
                id
                category
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CHARITY_DETAIL = gql`
  query GetCharityDetail($id: ID!) {
    charity(id: $id) {
      id
      // You can include other fields here to fetch additional details
    }
  }
`;
