const users = require('../seeds/userData.js');
const posts = require('../seeds/postData.js');
const comments = require('../seeds/commentData.js');

const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

// Bring in graphql types
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
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
  fields: () => ({
      id: { type: GraphQLID },
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
      userPicturePath: { type: GraphQLString },
      likes: { type: GraphQLInt },
      comments: { type: GraphQLList(CommentType) },
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

/* ROOT QUERY */
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
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
      args: { id: { type: GraphQLID } },
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

    comment: {
      type: CommentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Comment.findById(args.id);
      },
    },

    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.find();
      },
    },
  },
});

/* MUTATIONS */

module.exports = new GraphQLSchema({
  query: RootQuery,
  // mutation: Mutation,
});
