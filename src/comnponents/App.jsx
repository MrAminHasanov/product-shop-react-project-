import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import ProductProvider from "../context/ProductContext/ProductContext";
import BlogProvider from "../context/BlogContext/BlogContext";
import "./global.scss";
import Shop from "../pages/Shop/Shop";

function App() {
  return (
    <>
      <BlogProvider>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/Home" index element={<Home />} />\
              <Route path="/Shop" element={<Shop />} />\
            </Route>
          </Routes>
        </ProductProvider>
      </BlogProvider>
    </>
  );
}

export default App;
