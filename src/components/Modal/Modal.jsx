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
import { useStateValue } from "../../context-management/StateProvider";
import { ACTIONS } from "../../context-management/constants";

export default function Modal({ type,setIsModalOpen }) {
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const dispatch = useStateValue()[1];
  const history = useHistory();
  // const param = useParams();


  const handleCloseModal = () => {
    if (type === "private") {
      history.push("/");
      // history.goBack();
    }
    // dispatch({
    //   type: ACTIONS.CHANGE_MODAL_STATE,
    // });
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
            // dispatch({
            //   type: ACTIONS.CHANGE_MODAL_STATE,
            // });
            setIsModalOpen(false);           
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => { });
  };

  return (
    <div className="modal-container noblur">
      <div className="modal">
        <button className="close" onClick={handleCloseModal}>
          <FaTimes />
        </button>
        <div className="sign-up">
          <h3>Sign up to continue shopping !!</h3>
          <button className="sign-up-button" onClick={loginWithGoogle}>
            <FcGoogle className="modal-icons" />
            <h5>Sign up with Google</h5>
          </button>
          <button className="sign-up-button" onClick={loginWithFacebook}>
            <FaFacebookF className="modal-icons" />
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

          <button
            className="sign-up-button"
            id="phone-button"
            onClick={loginWithPhone}
          >
            <h5>Sign up with phone</h5>
          </button>
          <div id="recaptcha-container"></div>
        </div>
      </div>
    </div>
  );
}
