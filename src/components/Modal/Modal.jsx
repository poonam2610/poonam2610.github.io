import React, { useState } from "react";
import "./Modal.scss";
import { FaFacebookF, FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router-dom";
import {
  auth,
  facebookAuthProvider,
  googleAuthProvider,
  firebase,
} from "../../firebase-config/firebase";
import PropTypes from 'prop-types';

export default function Modal({ type, setIsModalOpen }) {
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const history = useHistory();


  const handleCloseModal = () => {
    if (type === "private") {
      history.push("/");
      // history.goBack();
    }
    setIsModalOpen(false);
  };

  const loginWithFacebook = () => {
    auth
      .signInWithPopup(facebookAuthProvider)
      .then((result) => {
        // dispatch({
        //   type: ACTIONS.CHANGE_MODAL_STATE,
        // });
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.warn("Error in login", error);
      });
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

  const loginWithPhone = () => {
    const recaptcha = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
    auth
      .signInWithPhoneNumber(phoneNumber, recaptcha)
      .then((e) => {
        const code = prompt("enter Otp");
        e.confirm(code)
          .then((result) => {
            setIsModalOpen(false);
          })
          .catch((err) => {
            // alert("Wrong OTP, Retry With Correct OTP")
            console.log(err.message);
          });
      })
      .catch((err) => { });
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
          <button className="sign__up__button" onClick={loginWithFacebook}>
            <FaFacebookF className="facebook" />
            <h5>Sign up with Facebook</h5>
          </button>
          <br />
          <br />
          <div className="divisionBar">
            <hr />
            <p>OR</p>
            <hr />
          </div>
          <input
            type="text"
            value={phoneNumber}
            placeholder="PHONE NUMBER"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div id="recaptcha-container"></div>
          <button
            className="sign__up__button"
            id="phone__button"
            onClick={loginWithPhone}
          >
            <h5>Sign up with phone</h5>
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