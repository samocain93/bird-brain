import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($name: String!, $email: String!, $password: String!) {
    login(name: $name, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

// export const ADD_POST = gql`
//   mutation addPost() {
//     addPost() {
    
//     }
//   }
// `;

// export const ADD_COMMENT = gql`
//   mutation addComment() {
//     addComment() {
    
//     }
//   }
// `;