import React,{useState} from "react";
import "./Modal.scss";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Modal({ setIsLoginClicked }) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCloseModal = () => {
    setIsLoginClicked(false);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <button className="close" onClick={handleCloseModal}>
          x
        </button>
        <div className="sign-up">
          <h3>Log in /sign up</h3>
          <button className="sign-up-button">
            <span>
              <FaFacebookF />
            </span>
          </button>
          <br />
          <button className="sign-up-button">
            <FcGoogle />
          </button><br/>
          <input type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
        </div>
      </div>
    </div>
  );
}
