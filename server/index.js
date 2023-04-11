const express = require('express');
// const colors = require('colors');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schema/schema');
const db = require('./config/db');

const port = process.env.PORT || 3000;
const app = express();

// connect do DB
// connectDB();

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

    db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

startApolloServer(typeDefs, resolvers);

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );

app.listen(port, console.log(`Server running on port ${port}`));
