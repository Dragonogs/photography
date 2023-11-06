import React from 'react'

export default function Modal({isModalOpen, setIsModalOpen, imgUrl}) {
    const openModal = () => {
        setIsModalOpen(true);
    };
   
    const closeModal = () => {
        setIsModalOpen(false);
    };
  return (
    <div onClick={closeModal} className="modal" style={{display: isModalOpen ? "flex" : "none"}}>
    <img className='modal-image' src={imgUrl} alt="" />
</div>
  )
}
