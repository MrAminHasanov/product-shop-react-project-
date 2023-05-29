import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import ProductProvider from "../context/ProductContext/ProductContext";
import BlogProvider from "../context/BlogContext/BlogContext";
import "./global.scss";

function App() {
  return (
    <>
      <BlogProvider>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />\
            </Route>
          </Routes>
        </ProductProvider>
      </BlogProvider>
    </>
  );
}

export default App;
