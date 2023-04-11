const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    avatar: String
    posts: [Post]
  }

  type Post {
    _id: ID
    user: User
    text: String
    image: String
    likes: Int
    comments: [Comment]
    date: String
  }

  type Comment {
    _id: ID
    user: User
    post: Post
    text: String
    date: String
  }

  type Query {
    users: [User]
    posts: [Post]
    comments: [Comment]
    user(_id: ID!): User
    post(_id: ID!): Post
    comment(_id: ID!): Comment
  }
`;

module.exports = typeDefs;
