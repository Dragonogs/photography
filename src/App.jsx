import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import "./App.css";

function App() {

  return (
    <Gallery></Gallery>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="https://dragonogs.github.io/photography/" element={<Gallery/>} />
    //     <Route path="https://dragonogs.github.io/photography/about" element={<About/>} />
    //     <Route path="https://dragonogs.github.io/photography/contact" element={<Contact/>} />
    //     <Route path="" element={<NotFound/>} />
    //   </Routes>
    // </BrowserRouter>
  )

}

export default App;
