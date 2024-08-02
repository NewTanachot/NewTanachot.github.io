import { Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Test from "../components/test";

export default function MapRoutes() {
    const routing = (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/test" element={<Test></Test>}></Route>
        </Routes>
    );

    return routing;
}
