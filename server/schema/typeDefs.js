const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    name: String
    email: String
    password: String
    avatar: String
    posts: [Post]
    friends: [User]
  }

  type Post {
    _id: ID
    user: User
    text: String
    image: String
    likes: Int
    postAuthor: String
    comments: [Comment]
    createdAt: String
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
    user(name: String!): User
    posts: [Post]
    postss(name: String!): [Post]
    post(_id: ID!): Post
    comments: [Comment]
    comment(_id: ID!): Comment
    me: User
  }

  # Set up an Auth type to handle returning data from a post creating or user login
  type Auth {
    token: ID!
    user: User!
  }

  input LoginInput {
    name: String!
    password: String!
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addPost(text: String!): Post
    addComment(postId: ID!, text: String!): Comment
    updateUser(_id: ID!, name: String, email: String, password: String): User
    updatePost(_id: ID!, text: String, image: String): Post
    updateComment(_id: ID!, text: String): Comment
    deleteUser(_id: ID!): User
    deletePost(_id: ID!): Post
    deleteComment(_id: ID!): Comment
    login(input: LoginInput!): Auth
  }
`;

module.exports = { typeDefs };
