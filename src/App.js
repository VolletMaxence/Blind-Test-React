import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import BlindTest from "./pages/BlindTest";
import ConfigBlindTest from "./pages/ConfigBlindTest";
import Home from "./pages/Home";
import WaitingRoomBlindTest from "./pages/WaitingRoomBlindTest";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/configblindtest" element={<ConfigBlindTest />}/>
        <Route path="/blindtest" element={<BlindTest />}/>
        <Route path="/roomblindtest" element={<WaitingRoomBlindTest />}/>
        {/* Si URL n'est pas déclaré */}
        <Route path="*" element={<Home />}/>
      </Routes>
    </BrowserRouter>

    );
};

export default App;

// https://youtu.be/f0X1Tl8aHtA?t=2319