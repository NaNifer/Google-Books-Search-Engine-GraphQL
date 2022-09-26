import { gql } from '@apollo/client';


// login: Accepts an email and password as parameters; returns an Auth type.
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                username
                email
            }
        }
    }
`;

// addUser: Accepts a username, email, and password as parameters; returns an Auth type.
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username,
        email
      }
    }
  }
`;

// saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type.
export const SAVE_BOOK = gql`
    mutation saveBook($authors: [String], $description: String!, $title: String!, $bookId: String, $image: String, $link: String) {
        saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
            username
            email
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;

// removeBook: Accepts a book's bookId as a parameter; returns a User type.
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;