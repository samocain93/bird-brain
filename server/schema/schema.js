const { users, posts } = require('../sampleData');

const User = require('../models/User');
const Post = require('../models/Post');

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

// Create types

