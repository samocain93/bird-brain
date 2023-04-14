const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // find all users and populate posts
    users: async () => {
      return User.find({}).populate({
        path: 'posts',
        populate: { path: 'user', model: User },
      });
    },

    // return all posts and populate comments
    // TODO: this not finding name of user
    posts: async () => {
      return Post.find({})
        .populate({
          path: 'comments',
        })
        .populate({
          path: 'comments.user',
        })
        .populate('user');
    },

    // return a single user
    user: async (parent, args) => {
      return User.findOne(args.id).populate({
        path: 'posts',
      });
    },

    // return a single post
    post: async (parent, args) => {
      return Post.findOne(args.id).populate({
        path: 'user',
      });
    },

    // return all comments
    comments: async () => {
      return Comment.find({}).populate({
        path: 'user',
        populate: { path: 'posts', model: Post },
      });
    },

    // return a single comment
    comment: async (parent, args) => {
      return Comment.findById(args.id);
    },
  },

  Mutation: {
    // add a user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },

    // add a post
    addPost: async (parent, args, context) => {
      //check if the user is authenticated
      if (context.user) {
        throw new AuthenticationError('You must be logged in to add a post');
      }
      const post = await Post.create({ ...args, user: context.user._id });
      return post;
    },

    // add a comment
    addComment: async (parent, args) => {
      const comment = await Comment.create(args);
      return comment;
    },

    // delete a user
    deleteUser: async (parent, args) => {
      return User.findOneAndDelete(args.id);
    },

    // delete a post
    deletePost: async (parent, args) => {
      const post = await Post.findByIdAndDelete(args.id);
      return post;
    },
  },
};

module.exports = { resolvers };
