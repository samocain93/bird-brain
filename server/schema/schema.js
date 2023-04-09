const users = require('../seeds/userData.js');
const posts = require('../seeds/postData.js');
const comments = require('../seeds/commentData.js');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require('graphql');

// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    picturePath: { type: GraphQLString },
    friends: { type: GraphQLList(GraphQLID) },
    age: { type: GraphQLInt },
    location: { type: GraphQLString },
    occupation: { type: GraphQLString },
    bio: { type: GraphQLString },
    posts: { type: GraphQLList(GraphQLID) },
  }),
});

// Post Type
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    location: { type: GraphQLString },
    description: { type: GraphQLString },
    picturePath: { type: GraphQLString },
    likes: { type: GraphQLInt },
    comments: { type: GraphQLList(GraphQLID) },
  }),
});

// Comment Type
const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    postId: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    location: { type: GraphQLString },
    description: { type: GraphQLString },
    picturePath: { type: GraphQLString },
    userPicturePath: { type: GraphQLString },
    likes: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: GraphQLList(UserType),
      resolve(parent, args) {
        return users;
      },
    },

    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return users.find((user) => user.id === args.id);
      },
    },

    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return posts.find((post) => post.id === args.id);
      },
    },

    posts: {
      type: GraphQLList(PostType),
      resolve(parent, args) {
        return posts;
      },
    },

    comment: {
      type: CommentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return comments.find((comment) => comment.id === args.id);
      },
    },

    comments: {
      type: GraphQLList(CommentType),
      resolve(parent, args) {
        return comments;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
