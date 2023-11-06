import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CheckAddress from "./pages/CheckAddress";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/check' element={<CheckAddress />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;