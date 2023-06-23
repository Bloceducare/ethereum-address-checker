import { Fragment } from "react";
import { DownloadBtn } from "./components/core";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CheckAddress from "./pages/CheckAddress";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/check' element={<CheckAddress/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
