import React, { useEffect, useState } from 'react'

export default function GalleryItem({url, setImgUrl, setIsModalOpen, large}) {

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const handleImageLoad = (e) => {
        setDimensions({
          width: e.target.naturalWidth,
          height: e.target.naturalHeight
        });
       };

    const [isPortrait, setIsPortrait] = useState(false);

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
            <img className="gallery-image" src={url} onLoad={handleImageLoad}></img>
          </div>
  )
}
