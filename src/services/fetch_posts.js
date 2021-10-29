import gql from "graphql-tag";


const POSTS_QUERY = gql`
  query {
    posts {
      id
      title
      body
      author
      createdAt
      coverImage {
        id
        url
      }
      trending
    }
  }
`;

export default POSTS_QUERY;