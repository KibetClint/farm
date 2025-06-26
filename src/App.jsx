import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Farm from "./pages/Farm";
// import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
// import FAQs from "./pages/FAQs";
import BookVisit from "./pages/BookVisit";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/farm" element={<Farm />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/faqs" element={<FAQs />} /> */}
        <Route path="/book-visit" element={<BookVisit />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
