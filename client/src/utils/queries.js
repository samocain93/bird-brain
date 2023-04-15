import { gql } from '@apollo/client';

// export const QUERY_POSTS = gql`
//   query Posts {
//     posts {
//       user {
//         name
//       }
//       text
//       likes
//       comments {
//         text
//         user {
//           name
//         }
//       }
//     }
//   }
// `;

export const QUERY_POST = gql`
  query Post($id: ID!) {
    post(_id: $id) {
      user {
        name
      }
      text
      image
      likes
    }
  }
`;

export const QUERY_USERS = gql`
  query Users {
    users {
      name
      avatar
      posts {
        text
        image
        likes
        date
      }
    }
  }
`;

export const QUERY_USER = gql`
  query User($id: ID!) {
    user(_id: $id) {
      name
      email
      avatar
      posts {
        text
        likes
        date
      }
    }
  }
`;


