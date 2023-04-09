const users = require('../seeds/userData.js');
const posts = require('../seeds/postData.js');
const comments = require('../seeds/commentData.js');

const { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLString, GraphQLList, GraphQLInt } = require('graphql');

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

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return users.find((user) => user.id === args.id);
      },
    },
  },
});


module.exports = new GraphQLSchema({
  query: RootQuery,
});