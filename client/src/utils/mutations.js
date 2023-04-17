import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        name
        email
        password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        name
        email
        password
        _id
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($text: String!) {
    addPost(text: $text) {
      _id
      text
      postAuthor
      createdAt
    }
  }
`;

// export const ADD_COMMENT = gql`
//   mutation addComment() {
//     addComment() {
// holding for now
/* export const ADD_COMMENT = gql`
  mutation addComment() {
    addComment() {
    
//     }
//   }
// `;
    }
  }
`; */
