import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);

  // const images = require.context('../../public/photos/images', true);
  // const imageFilenames = images.keys();

  // const photos = imageFilenames.map((filename, index) => {
  //         <div
  //           key={index}
  //           onClick={() => {
  //             setImgUrl(`./public/photos/${filename}.jpg`);
  //             setIsModalOpen(true);
  //           }}
  //           className="gallery-item"
  //         >
  //           <img className="gallery-image" src={`./public/photos/${filename}.jpg`}></img>
  //         </div>
  // })

  // const imagePaths = [
  //   "./public/photos/DSC00861.jpg",
  //   "./public/photos/DSC00894.jpg",
  //   "./public/photos/DSC01231.jpg",
  //   "./public/photos/DSC01017.jpg",
  //   "./public/photos/DSC00230.jpg",
  //   "./public/photos/DSC00947.jpg",
  //   "./public/photos/DSC00872.jpg",
  //   "./public/photos/DSC00941.jpg",
  //   "./public/photos/DSC01102.jpg",
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

  // console.log(photos)

  // console.log(isModalOpen)
  // console.log(imgUrl)

  return (
    <>
      <Modal className="modal" isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} imgUrl={imgUrl} />

      <div className="header">
        <nav className="top-nav">
          <a href="#" className="nav-brand">
            <span>Oliver </span>
            <span>Shipley.</span>
          </a>
          <button className="dropdown-btn">
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>
        <ul className="dropdown-menu">
          <li>
            <a href="#" className="nav-link-active">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <main className="main-content">
        <nav className="main-nav">
          <ul className="nav-menu">
            <li>
              <a href="#" className="nav-link-active">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="gallery-grid">
          {/* {photos} */}
          <div
            onClick={() => {
              setImgUrl("./public/photos/DSC01108.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="./public/photos/DSC01108.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("./public/photos/DSC00861.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item-large"
          >
            <img className={"gallery-image"} src="./public/photos/DSC00861.jpg"></img>
          </div>
          <div
            onClick={() => {
              setImgUrl("./public/photos/DSC00894.jpg");
              setIsModalOpen(true);
            }}
            className="gallery-item"
          >
            <img className="gallery-image" src="./public/photos/DSC00894.jpg"></img>
          </div>
          <div onClick={() => console.log("hello")} className="gallery-item">
            <img className="gallery-image" src="./public/photos/DSC01231.jpg"></img>
          </div>
          <div onClick={() => console.log("hello")} className="gallery-item">
            <img className="gallery-image" src="./public/photos/DSC01017.jpg"></img>
          </div>
          <div
            onClick={() => console.log("hello")}
            className="gallery-item-large"
          >
            <img className="gallery-image" src="./public/photos/DSC00230.jpg"></img>
          </div>
          <div onClick={() => console.log("hello")} className="gallery-item">
            <img className="gallery-image" src="./public/photos/DSC00947.jpg"></img>
          </div>
          <div onClick={() => console.log("hello")} className="gallery-item">
            <img className="gallery-image" src="./public/photos/DSC00872.jpg"></img>
          </div>
          <div onClick={() => console.log("hello")} className="gallery-item">
            <img className="gallery-image" src="./public/photos/DSC00941.jpg"></img>
          </div>
          <div onClick={() => console.log("hello")} className="gallery-item">
            <img className="gallery-image" src="./public/photos/DSC01102.jpg"></img>
          </div>
          
        </div>
      </main>
    </>
  );
}

export default App;
