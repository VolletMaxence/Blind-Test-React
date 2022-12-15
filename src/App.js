import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import About from "./pages/About";
import BlindTestGeneral from "./pages/BlindTestGeneral";
import Home from "./pages/Home";
import InfoAnime from "./pages/InfoAnime";
import BlindTestList from "./pages/BlindTestList";
import BlindTestAjout from "./pages/BlindTestAjout";

const App = () => {
    return (
      <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/blindtestgeneral" element={<BlindTestGeneral />}/>
            <Route path="/infoanime" element={<InfoAnime />}/>
            <Route path="/blindtestlist" element={<BlindTestList/>}/>
            <Route path="/blindtestajout" element={<BlindTestAjout/>}/>
            {/* Si URL n'est pas déclaré */}
            <Route path="*" element={<Home />}/>
          </Routes>
      </BrowserRouter>
     );
};

export default App;

// https://youtu.be/f0X1Tl8aHtA?t=2319