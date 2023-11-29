import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import University from "./pages/University/University";
import Layout from "./utils/Layout";
import Statistics from "./pages/Statistics/Statistics";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Layout><University /></Layout>} path="/university" />
      <Route element={<Layout><Statistics /></Layout>} path="/statistics" />
    </Routes>
  );
}

export default App;
