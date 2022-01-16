import React, { useState } from "react";
import "./Modal.scss";
import {  FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router-dom";
import {
  auth,
  
  googleAuthProvider,
  firebase,
} from "../../firebase-config/firebase";
import PropTypes from 'prop-types';

export default function Modal({ type, setIsModalOpen }) {
  
  const history = useHistory();


  const handleCloseModal = () => {
    if (type === "private") {
      history.push("/");
      // history.goBack();
    }
    setIsModalOpen(false);
  };

 

  const loginWithGoogle = () => {
    auth.signInWithPopup(googleAuthProvider)
      .then(authUser => {
        // dispatch({
        //   type: ACTIONS.CHANGE_MODAL_STATE,
        // });
        setIsModalOpen(false)
      }).catch(err => {
        console.log(err.message);
      })
  };



  return (
    // <div className = "modal-container" style = {{filter: "blur(0)"}}>
    <div className="modal__container">
      <div className="modal">
        <button className="close" onClick={handleCloseModal}>
          <FaTimes />
        </button>
        <div className="sign__up">
          <h3>Sign up to continue shopping !!</h3>
          <button className="sign__up__button" onClick={loginWithGoogle}>
            <FcGoogle className="modal__icons" />
            <h5>Sign up with Google</h5>
          </button>
          
          
          
         
         
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  type: PropTypes.string
}