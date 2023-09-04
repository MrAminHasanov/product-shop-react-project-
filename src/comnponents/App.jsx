import { Route, Routes } from "react-router-dom";
import "./global.scss";

import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Blog from "pages/Blog/Blog";
import Contact from "pages/Contact/Contact";
import ShopingCard from "pages/ShopingCard/ShopingCard";

import BlogProvider from "../context/BlogContext/BlogContext";
import ProductPage from "pages/ProductPage/ProductPage";
import BlogInfoPage from "pages/BlogInfoPage/BlogInfoPage";

function App() {
  return (
    <>
      <BlogProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shoping-card" element={<ShopingCard />} />
            <Route path="shop/product-info/:id" element={<ProductPage />} />
            <Route path="blog/blog-info/:id" element={<BlogInfoPage />} />
          </Route>
        </Routes>
      </BlogProvider>
    </>
  );
}

export default App;
