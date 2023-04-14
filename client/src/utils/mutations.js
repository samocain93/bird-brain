import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      name
      email

    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      name
      email
      password
      _id
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
