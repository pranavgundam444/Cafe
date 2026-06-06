import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Components/Home";
import AboutPage from "./Components/About";
import MenuPage from "./Components/Menu";
import Contact from "./Components/Contact";
import Reserve from "./Components/Reserve";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reserve" element={<Reserve />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;