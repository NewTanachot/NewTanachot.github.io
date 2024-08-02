import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Test from "./components/test";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/test" element={<Test></Test>}></Route>
        </Routes>
    );
}

export default App;
