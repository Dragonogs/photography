import React from 'react'
import { useState } from "react";
import Modal from "../components/Modal";
import GalleryItem from '../components/GalleryItem';

export default function Gallery() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imgUrl, setImgUrl] = useState(null);

    const [toggleMenu, setToggleMenu] = useState(true);

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
          <GalleryItem url="photos/DSC01108.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC00861.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC00894.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC01231.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC00808.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC01732.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC02628.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC02483.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC00592-Enhanced-NR.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC00936.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC01017.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC02321.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC02601-Enhanced-NR-2.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC01005.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC00994.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC00230.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC01102.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC00872.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC00941.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          <GalleryItem url="photos/DSC00947.jpg" setImgUrl={setImgUrl} setIsModalOpen={setIsModalOpen}/>
          
          
        </div>
      </main>
    </>
  );
}
