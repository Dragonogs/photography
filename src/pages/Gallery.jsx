import React from 'react'
import { useState } from "react";
import Modal from "../components/Modal";
import GalleryItem from '../components/GalleryItem';

export default function Gallery() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imgUrl, setImgUrl] = useState(null);

    const [toggleMenu, setToggleMenu] = useState(true);

    const reqImages = require.context('/photos', true, /\.(png|jpe?g|svg)$/);

    const allImageFilePaths = reqImages.keys();

    const images = allImageFilePaths.map(path => reqImages(path));



  return (
    <>
      <Modal className="modal" isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} imgUrl={imgUrl} />
      <div className="header">
        <nav className="top-nav">
          <a href="https://dragonogs.github.io/photography/" className="nav-brand">
            <span>Oliver </span>
            <span>Shipley.</span>
          </a>
          <button onClick={()=>setToggleMenu(prev=>!prev)} className="dropdown-btn">
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>
        <ul className="dropdown-menu" style={{display: toggleMenu && "none"}}>
          <li>
            <a href="https://dragonogs.github.io/photography/" className="nav-link-active">
              Gallery
            </a>
          </li>
          <li>
            <a href="https://dragonogs.github.io/photography/about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="https://dragonogs.github.io/photography/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <main className="main-content">
        <nav className="main-nav">
          <ul className="nav-menu">
            <li>
              <a href="https://dragonogs.github.io/photography/" className="nav-link-active">
                Gallery
              </a>
            </li>
            <li>
              <a href="https://dragonogs.github.io/photography/about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="https://dragonogs.github.io/photography/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="gallery-grid">
        {images.map((image, index) => (
          <GalleryItem key={index} url={image} alt={`Image ${index}`} setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          ))}
        </div>
      </main>
    </>
  );
}
