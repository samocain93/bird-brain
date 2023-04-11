const { User, Post, Comment } = require('../models');

const resolvers = {
  Query: {
    // find all users and populate posts
    users: async () => {
      return User.find({}).populate('posts');
    },

    // return all posts and populate comments
    posts: async () => {
      return Post.find({}).populate('comments').populate('user');
    },

    // return a single user
    user: async (parent, args) => {
      return User.findById(args.id).populate('posts');
    },

    // return a single post
    post: async (parent, args) => {
      return Post.findById(args.id).populate('comments').populate('user');
    },

    // return all comments
    comments: async () => {
      return Comment.find({}).populate('user').populate('post');
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
    addPost: async (parent, args) => {
      const post = await Post.create(args);
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
