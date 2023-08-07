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
          description
          website_url
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
  query GetCharityDetail($id: GadgetID!) {
    charity(id: $id) {
      name
      description
      website_url
      causes {
        edges {
          node {
            category
          }
        }
      }
    }
  }
`;
