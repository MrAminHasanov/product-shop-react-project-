import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import CaruselProvider from "../context/CaruselContext/CaruselContext"

function App() {
    return (
        <>  
            <CaruselProvider>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </CaruselProvider>
        </>
    )
}

export default App;