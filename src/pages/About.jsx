import React from "react";
import { useState } from "react";

export default function About() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="header">
        <nav className="top-nav">
          <a
            href="https://dragonogs.github.io/photography"
            className="nav-brand"
          >
            <span>Oliver </span>
            <span>Shipley.</span>
          </a>
          <button
            onClick={() => setToggleMenu((prev) => !prev)}
            className="dropdown-btn"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>
        <ul
          className={`dropdown-menu`}
          style={{ display: toggleMenu ? "none" : "block" }}
        >
          <li>
            <a
              href="https://dragonogs.github.io/photography/"
              className="nav-link"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="https://dragonogs.github.io/photography/about"
              className="nav-link-active"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://dragonogs.github.io/photography/contact"
              className="nav-link "
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <main className="main-content">
        <nav className="main-nav">
          <ul className="nav-menu">
            <li>
              <a
                href="https://dragonogs.github.io/photography/"
                className="nav-link serif"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="https://dragonogs.github.io/photography/about"
                className="nav-link-active serif"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://dragonogs.github.io/photography/contact"
                className="nav-link serif"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="gallery-grid">
          <p>
            A 23 year old amateur photographer from Wakefield, West Yorkshire.
          </p>
        </div>
      </main>
    </>
  );
}
