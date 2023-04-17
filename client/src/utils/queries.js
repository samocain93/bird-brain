import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
query Posts {
  posts {
    _id
    user {
      name
    }
    text
    image
    likes
    comments {
      user {
        name
      }
    }
  }
}
`;

export const QUERY_POST = gql`
  query Post($id: ID!) {
    post(_id: $id) {

      text
      image
      likes
    }
  }
`;

// export const QUERY_USERS = gql`
//   query Users {
//     users {
//       name
//       avatar
//       posts {
//         text
//         image
//         likes
//         date
//       }
//     }
//   }
// `;

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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      posts {
        _id
        text
        createdAt
      }
    }
  }
`;