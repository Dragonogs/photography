import React from 'react'
import { useState } from "react";
import Modal from "../components/Modal";

export default function Gallery() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imgUrl, setImgUrl] = useState(null);

    const [toggleMenu, setToggleMenu] = useState(false);

  // const images = require.context('../.https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/images', true);
  // const imageFilenames = images.keys();

  // const photos = imageFilenames.map((filename, index) => {
  //         <div
  //           key={index}
  //           onClick={() => {
  //             setImgUrl(`https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/${filename}.jpg`);
  //             setIsModalOpen(true);
  //           }}
  //           className="gallery-item"
  //         >
  //           <img className="gallery-image" src={`https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/${filename}.jpg`}></img>
  //         </div>
  // })

  // const imagePaths = [
  //   "https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00861.jpg",
  //   "https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00894.jpg",
  //   "https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC01231.jpg",
  //   "https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC01017.jpg",
  //   "https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00230.jpg",
  //   "https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00947.jpg",
  //   "https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00872.jpg",
  //   "https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00941.jpg",
  //   "https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC01102.jpg",
  //  ];

  //  console.log(imagePaths)

  //  const photos = imagePaths.map((imgPath, index) => {
  //   return <div key={index} onClick={() => {
  //             setImgUrl(imgPath);
  //             setIsModalOpen(true);
  //           }}
  //           className="gallery-item"
  //         >
  //           <img className="gallery-image" src={imgPath}></img>
  //         </div>
  //  })

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
        <ul className="dropdown-menu" style={{display: toggleMenu ? "block" : "none"}}>
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
          {/* {photos} */}
          <div
            onClick={() => {
              setImgUrl("https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC01108.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC01108.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00861.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item-large"
          >
            <img className={"gallery-image"} src="https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00861.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00894.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00894.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC01231.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC01231.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC01017.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC01017.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00230.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item-large"
          >
            <img className="gallery-image" src="https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00230.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00947.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00947.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00872.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00872.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00941.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC00941.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC01102.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="https://raw.githubusercontent.com/Dragonogs/photography/d312ff90b227a847c800798cfe83fec43bed7f5f/public/photos/DSC01102.jpg"></img>
          </div>
          
        </div>
      </main>
    </>
  );
}
