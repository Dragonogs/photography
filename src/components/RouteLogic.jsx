import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Gallery from '../pages/Gallery';

export default function RouteLogic() {
  return (
    <Router>
        <Routes>
            <Route path="/"><Gallery /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route><NotFound/></Route>
        </Routes>
    </Router>
  )
}
