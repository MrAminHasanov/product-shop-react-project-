import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import ProductProvider from "../context/ProductContext/ProductContext";
import "./global.scss"

function App() {
    return (
        <>
            <ProductProvider>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Home />} />\
                    </Route>
                </Routes>
            </ProductProvider>
        </>
    )
}

export default App;