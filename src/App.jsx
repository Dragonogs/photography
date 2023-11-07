import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import "./App.css";

function App() {

  return (
    // <Gallery></Gallery>
    <BrowserRouter>
      <Routes>
        <Route path="photography/" element={<Gallery/>} />
        <Route path="photography/about" element={<About/>} />
        <Route path="photography/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
