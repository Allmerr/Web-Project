import "./App.css";
import Nav from "./main/nav.js";
import Main from "./main/main.js";
import About from "./main/about.js";
import Project from "./main/project";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
            </Routes>
        </>
    );
}

export default App;
