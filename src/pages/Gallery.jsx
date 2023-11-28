import React from 'react'
import { useState } from "react";
import Modal from "../components/Modal";

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
          <div
            onClick={() => {
              setImgUrl("photos/DSC01108.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="photos/DSC01108.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("photos/DSC00861.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item-large"
          >
            <img className={"gallery-image"} src="photos/DSC00861.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("photos/DSC00894.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="photos/DSC00894.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("photos/DSC01231.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="photos/DSC01231.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("photos/DSC01017.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="photos/DSC01017.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("photos/DSC00230.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item-large"
          >
            <img className="gallery-image" src="photos/DSC00230.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("photos/DSC00947.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="photos/DSC00947.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("photos/DSC00872.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="photos/DSC00872.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("photos/DSC00941.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="photos/DSC00941.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("photos/DSC01102.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="photos/DSC01102.jpg"></img>
          </div>
          
        </div>
      </main>
    </>
  );
}
