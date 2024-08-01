import React, { useEffect, useState } from "react";

export default function GalleryItem({ url, setImgUrl, setIsModalOpen }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [isPortrait, setIsPortrait] = useState(false);

  const handleImageLoad = (e) => {
    setDimensions({
      width: e.target.naturalWidth,
      height: e.target.naturalHeight,
    });
  };

  useEffect(() => {
    if (dimensions.height > dimensions.width) {
      setIsPortrait(true);
    } else {
      setIsPortrait(false);
    }
  }, [dimensions]);

  return (
    <div
      onClick={() => {
        setImgUrl(`${url}`);
        setIsModalOpen(true);
      }}
      className={isPortrait ? "gallery-item" : "gallery-item-large"}
    >
      <img
        loading="lazy"
        className="gallery-image"
        src={url}
        onLoad={handleImageLoad}
      ></img>
    </div>
  );
}
