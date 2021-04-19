import React, { useCallback, useState } from "react";
import "./Modal.scss";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router-dom";
import { auth, facebookAuthProvider, googleAuthProvider, firebase } from "../../firebase-config/firebase";

export default function Modal({ type, setIsModalOpen }) {
  const [phoneNumber, setPhoneNumber] = useState("+91");

  let history = useHistory();

  const handleCloseModal = () => {
    if (type === "private") {
      history.goBack()
      setIsModalOpen(false);
    }
    setIsModalOpen(false);
  };

  const loginWithFacebook = () => {
    auth.signInWithPopup(facebookAuthProvider).then(result => {
      console.log("facebook data", result);
      setIsModalOpen(false)
    }).catch((error) => {
      console.warn("Error in login", error);
    })
  };

  const loginWithGoogle = useCallback(async e => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
      setIsModalOpen(false);
    } catch (error) {
      console.warn("Error in Login");
    }
  }, [setIsModalOpen]);

  const loginWithPhone = () => {
    const recaptcha = new firebase.auth.RecaptchaVerifier("recaptch-container");
    auth.signInWithPhoneNumber("+918906838026", recaptcha).then((e) => {
      const code = prompt("enter Otp", "");
      e.confirm(code).then((result) => {
        console.log({ result })
        setIsModalOpen(false);
      }).catch((error) => {
        console.log(error)
      })
    })
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <button className="close" onClick={handleCloseModal}>
          x
        </button>
        <div className="sign-up">
          <h3>Log in /sign up</h3>
          <button className="sign-up-button" onClick={loginWithFacebook}>
            <span>
              <FaFacebookF />
            </span>
          </button>
          <br />
          <button className="sign-up-button" onClick={loginWithGoogle}>
            <FcGoogle />
          </button><br />
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <div id="recaptch-container"></div>
          <button onClick={loginWithPhone} >click to login with phone</button>
        </div>
      </div>
    </div>
  );
}
