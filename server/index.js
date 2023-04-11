const express = require('express');
const colors = require('colors');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { graphqlHTTP } = require('express-graphql');

// import graphql schema
const { typeDefs, resolvers } = require('./schema');

const db = require('./config/db');

const port = process.env.PORT || 3000;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { authMiddleware } = require('./utils/auth');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a new instance of apollo server with the graphql schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
};

db.once('open', () => {
  app.listen(port, () => {
    console.log(`API server running on port ${port}`);
    console.log(`Use GraphQL at http://localhost:${port}${server.graphqlPath}`);
  });
});

startApolloServer(typeDefs, resolvers);
