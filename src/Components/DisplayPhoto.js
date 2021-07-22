import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router';
import "../Assets/Styles/displayAlbum.scss"

const Modal = () => {
    const history = useHistory();

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            history.push("/");
        }
    }

    const selectedImg= localStorage.getItem("photoUrl")

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  )
}

export default Modal;