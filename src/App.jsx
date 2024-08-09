import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import "./App.css";
import "./css/stardom.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="photography/" element={<Gallery />} />
        <Route path="photography/about" element={<About />} />
        <Route path="photography/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
