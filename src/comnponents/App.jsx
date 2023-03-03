import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import CaruselProvider from "../context/CaruselContext/CaruselContext"
import ProductProvider from "../context/ProductContext/ProductContext";

function App() {
    return (
        <>
            <ProductProvider>
                <CaruselProvider>
                    <Routes>
                        <Route path="/" element={<Layout />} >
                            <Route index element={<Home />} />
                        </Route>
                    </Routes>
                </CaruselProvider>
            </ProductProvider>
        </>
    )
}

export default App;