import React from 'react'

export default function Test({isModalOpen, setIsModalOpen, imgUrl}) {
    const openModal = () => {
        setIsModalOpen(true);
    };
   
    const closeModal = () => {
        setIsModalOpen(false);
    };
  return (
    <div>
    this is a test
    <img src={imgUrl} alt="" onClick={closeModal} />
</div>
  )
}
