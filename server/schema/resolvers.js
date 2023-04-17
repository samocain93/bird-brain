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
    // posts: async (parent, { name }) => {
    //   const params = name ? { name } : {};
    //   return Post.find(params).sort({ createdAt: -1 });

    posts: async () => {
      return Post.find({})
        .populate({
          path: 'comments',
        })
        .populate({
          path: 'comments.user',
        })
        .sort({ createdAt: -1 })
        .populate('user');
    },

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
      console.log(name, email, password);
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { input }) => {
      const user = await User.findOne({ name: input.name });
      console.log(user)
      if (!user) {
        throw new AuthenticationError('No user found with this name');
      }

      const correctPw = await user.isCorrectPassword(input.password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      console.log(token)
      return { token, user };
    },

    // add a post
    /*  addPost: async (parent, args, context) => {
      //check if the user is authenticated
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to add a post');
      }
      const post = await Post.create({ ...args, user: context.user._id });
      return post;
    }, */

    // addPost: async (parent, args) => {
    //   const post = await Post.create(args);
    //   return post;
    // },

    addPost: async (parent, { text }, context) => {
      // console.log(text);
      console.log("CONTEXT:  ",context.user);
      if (context.user) {
        const post = await Post.create({
          text,
          postAuthor: context.user.name,
        });
        console.log(post);
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError('You need to be logged in');
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
