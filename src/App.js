import React from "react";
import { Navbar, Home, Footer, About , Work , Portfolio } from "./components/";
// eslint-disable-next-line
import "swiper/css/bundle";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/work" element={<Work />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
