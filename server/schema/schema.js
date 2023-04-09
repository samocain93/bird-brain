const { users, posts, comments } = require('../sampleData');

const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

// Bring in graphql types
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLId,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

/* SCHEMA TYPES */

// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => {
    return {
      id: { type: GraphQLId },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      picturePath: { type: GraphQLString },
      friends: { type: GraphQLList(UserType) },
      age: { type: GraphQLInt },
      location: { type: GraphQLString },
      occupation: { type: GraphQLString },
      bio: { type: GraphQLString },
      posts: { type: GraphQLList(PostType) },
    };
  },
});

// Post Type
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => {
    return {
      id: { type: GraphQLId },
      userId: { type: GraphQLId },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      location: { type: GraphQLString },
      description: { type: GraphQLString },
      picturePath: { type: GraphQLString },
      userPicturePath: { type: GraphQLString },
      likes: { type: GraphQLInt },
      comments: { type: GraphQLList(CommentType) },
    };
  },
});

// Comment Type
const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => {
    return {
      id: { type: GraphQLId },
      userId: { type: GraphQLId },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      location: { type: GraphQLString },
      description: { type: GraphQLString },
      picturePath: { type: GraphQLString },
      userPicturePath: { type: GraphQLString },
      likes: { type: GraphQLInt },
      comments: { type: GraphQLList(CommentType) },
    };
  },
});

/* ROOT QUERY */
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLId } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },

    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },

    post: {
      type: PostType,
      args: { id: { type: GraphQLId } },
      resolve(parent, args) {
        return Post.findById(args.id);
      },
    },

    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find();
      },
    },
  },
});
