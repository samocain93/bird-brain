const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { authMiddleware } = require('./utils/auth');
// const { graphqlHTTP } = require('express-graphql');
// const colors = require('colors');

// import graphql schema
const { typeDefs, resolvers } = require('./schema');
const db = require('./config/db');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

    db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server now running on PORT ${PORT}!🚀`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}🅰️`);
    })
  })
};

startApolloServer(typeDefs, resolvers);