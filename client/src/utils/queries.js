import { gql } from '@apollo/client'

export const QUERY_POSTS = gql`
query Posts {
    posts {
      user {
        name
      }
      text
      likes
      comments {
        text
        user {
          name
        }
      }
    }
  }
`