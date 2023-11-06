import React from 'react'
import { useState } from 'react';

export default function Contact() {

    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
    <div className="header">
  <nav className="top-nav">
    <a href="/" className="nav-brand">
      <span>Oliver </span>
      <span>Shipley.</span>
    </a>
    <button onClick={()=>setToggleMenu(prev=>!prev)} className="dropdown-btn">
      <i className="fa-solid fa-bars"></i>
    </button>
  </nav>
  <ul className="dropdown-menu">
    <li>
      <a href="/" className="nav-link">
        Gallery
      </a>
    </li>
    <li>
      <a href="/about" className="nav-link">
        About
      </a>
    </li>
    <li>
      <a href="/contact" className="nav-link-active">
        Contact
      </a>
    </li>
  </ul>
</div>
<main className="main-content">
  <nav className="main-nav">
    <ul className="nav-menu">
      <li>
        <a href="/" className="nav-link">
          Gallery
        </a>
      </li>
      <li>
        <a href="/about" className="nav-link">
          About
        </a>
      </li>
      <li>
        <a href="/contact" className="nav-link-active">
          Contact
        </a>
      </li>
    </ul>
  </nav>
  <div className="gallery-grid">
      <p>Oliver_shipley@yahoo.co.uk</p>
  </div>
</main>
</>
  )
}
