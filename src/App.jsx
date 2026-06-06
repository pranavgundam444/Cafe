import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Components/Home";
import AboutPage from "./Components/About";
import MenuPage from "./Components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;