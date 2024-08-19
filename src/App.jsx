import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Transliterate from "./components/Transliterate"
import About from "./components/About";
import NotFoundPage from "./components/NotFoundPage";
import i18n from "./lang/i18";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transliterate" element={<Transliterate />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
