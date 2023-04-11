const { User, Post, Comment } = require('../models');

const resolvers = {
  Query: {
    // find all users
    users: async () => {
      return User.find({});
    },

    // return all posts
    posts: async () => {
      return Post.find({});
    },
  },
};

module.exports = resolvers;
