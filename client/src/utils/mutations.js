import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser() {
    addUser() {
    
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost() {
    addPost() {
    
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment() {
    addComment() {
    
    }
  }
`;