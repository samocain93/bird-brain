import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Body from "./components/Body";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";

function App() {
  return (
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
  );
}

export default App;
