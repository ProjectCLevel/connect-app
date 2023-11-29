import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import University from "./pages/University/University";
import Layout from "./utils/Layout";
import Statistics from "./pages/Statistics/Statistics";
import Profile from "./pages/Profile/Profile";
import Posts from "./pages/Posts/Posts";
import SignIn from "./pages/Sign_in/SignIn";

function App() {
  return (
    <Routes>
      <Route element={<SignIn />} path="/" />
      <Route element={<Layout><University /></Layout>} path="/university" />
      <Route element={<Layout><Statistics /></Layout>} path="/statistics" />
      <Route element={<Layout><Profile /></Layout>} path="/profile" />
      <Route element={<Layout><Posts /></Layout>} path="/posts" />
    </Routes>
  );
}

export default App;
