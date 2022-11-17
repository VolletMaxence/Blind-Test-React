import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ConfigBlindTest from "./pages/ConfigBlindTest";
import Home from "./pages/Home";
import ToWatch from "./pages/ToWatch";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blindtest" element={<ConfigBlindTest />}/>
        {/* Si URL n'est pas déclaré */}
        <Route path="*" element={<Home />}/>
      </Routes>
    </BrowserRouter>
    );
};

export default App;

// https://youtu.be/f0X1Tl8aHtA?t=2319