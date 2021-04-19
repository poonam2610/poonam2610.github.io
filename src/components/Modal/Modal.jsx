import React, { useContext, useState } from "react";
import "./Modal.scss";
import { FaFacebookF } from "react-icons/fa";
import firebase from "firebase";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router-dom";
// import { auth, facebookAuthProvider, googleAuthProvider, firebase } from "../../firebase-config/firebase";
import FirebaseContext from "../../firebase-config/context";

export default function Modal({ type, setIsModalOpen }) {
  const firebaseContext = useContext(FirebaseContext);
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
   firebaseContext.doFacebookSignIn()
   .then(result => {
      setIsModalOpen(false)
    }).catch((error) => {
      console.warn("Error in login", error);
    })
  };

  const loginWithGoogle = () => {
    firebaseContext
      .doGoogleSignIn()
      .then(authUser => {
        setIsModalOpen(false)
      }).catch(err => {
        console.log(err);
      })
  }

  const loginWithPhone = () => {
    const recaptcha = new firebase.auth.RecaptchaVerifier("recaptch-container");
    firebaseContext
      .doPhoneSignIn(phoneNumber, recaptcha)
      .then(e => {
        const code = prompt("enter Otp");
        e.confirm(code).then(result => {
          setIsModalOpen(false)
        }).catch(err => {
          console.log(err)
        });
      }).catch(err => {
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
