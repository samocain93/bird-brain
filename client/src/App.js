import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Body from "./components/Body";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";
import { 
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink } from '@apollo/client';

const httpLink =createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localstorage.getItem('');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cahce: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Body>
              <Home />
            </Body>
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          <Layout>
            <Body>
              <Profile />
            </Body>
          </Layout>
        }
      />
      <Route
        path="/friends"
        element={
          <Layout>
            <Body>
              <Friends />
            </Body>
          </Layout>
        }
      />
    </Routes>
    </ApolloProvider>
    
  );
}

export default App;
