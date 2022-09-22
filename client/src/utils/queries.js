import gql from 'graphql-tag';

// Query for get "me" 
export const GET_ME = gql`
query Query {
  me {
    username
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`;