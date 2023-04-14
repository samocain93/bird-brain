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
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      // Look up ther user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email.
      const user = await User.findOne({ email });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // If email and password are correct, sign the token and return it to the client
      const token = signToken(user);

      // Return an 'Auth' object that consists of the signed token and user's information
      return { token, user };
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
