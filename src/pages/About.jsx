import React from 'react'
import { useState } from 'react';

export default function About() {

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
            <a href="/about" className="nav-link-active">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-link">
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
              <a href="/about" className="nav-link-active">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="gallery-grid">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officiis quia aut, architecto iure ea corrupti possimus quos expedita, dicta mollitia laboriosam libero cupiditate consequuntur laborum. Quas voluptatem enim repellendus!</p>
        </div>
      </main>
    </>
  )
}
