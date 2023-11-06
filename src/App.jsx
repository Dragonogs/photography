import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
