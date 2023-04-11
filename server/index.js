const express = require('express');
const colors = require('colors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const { authMiddleware } = require('./utils/auth');

const connectDB = require('./config/db');
const port = process.env.PORT || 3000;

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
})

// connect do DB
// connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
