import { Route, Routes } from "react-router-dom";
import "./global.scss";

import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Blog from "pages/Blog/Blog";
import Contact from "pages/Contact/Contact";

import BlogProvider from "../context/BlogContext/BlogContext";
import ProductProvider from "../context/ProductContext/ProductContext";
import ProductPage from "pages/ProductPage/ProductPage";

function App() {
  return (
    <>
      <BlogProvider>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />\
              <Route path="Shop" element={<Shop />} />\
              <Route path="Blog" element={<Blog />} />\
              <Route path="Contact" element={<Contact />} />\
              <Route path="ProductInfo/:id" element={<ProductPage/>} />\
              <Route path="Shop/ProductInfo/:id" element={<ProductPage/>} />\
            </Route>
          </Routes>
        </ProductProvider>
      </BlogProvider>
    </>
  );
}

export default App;
