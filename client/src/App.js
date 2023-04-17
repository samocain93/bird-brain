import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { setContext } from '@apollo/client/link/context';
import Layout from "./components/Layout";
import Body from "./components/Body";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";
import Login from "./pages/Login";
import Signup from "./pages/Signup"

import { 
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
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
          <Route
            path="/login"
            element={
              <Layout>
                <Body>
                  <Login />
                </Body>
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <Body>
                  <Signup />
                </Body>
              </Layout>
            }
          />
        </Routes>
      
    </ApolloProvider>
    
  );
}

export default App;
