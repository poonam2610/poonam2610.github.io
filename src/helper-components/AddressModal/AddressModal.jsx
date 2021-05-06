import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import "./AddressModal.scss";
import PropTypes from "prop-types";
import { stateENUM } from "../../constants/Constant";

function AddressModal({ modalValue, setIsModalOpen, addOrSaveAddress }) {
  const [state, setState] = useState({
    id: modalValue?.id || uuidv4(),
    name: modalValue?.name || "",
    phone: modalValue?.phone || "",
    pincode: modalValue?.pincode || "",
    address: modalValue?.address || "",
    city: modalValue?.city || "",
    state: modalValue?.state || "",
    isDefault: modalValue?.isDefault || false,
  });
  const [isModalValue, setIsModalValue] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (modalValue) {
      setIsModalValue(true);
    }
  }, [modalValue]);

  const handleSave = () => {
    if (!errorMessage) {
      addOrSaveAddress(state);
      setIsModalOpen(false);
    }
  };
  const handleChange = (event) => {
    const isRequired = event.target.required;
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value,
    });
    if (isRequired) {
      if (value === "") {
        setErrorMessage("Please Enter all Required Field")
      } else {
        setErrorMessage("")
      }
    }
  };
  return (
    <div className="address__modal__container">
      <div className="address__modal">
        <button className="close" onClick={() => setIsModalOpen(false)}>
          <FaTimes />
        </button>

        <div className="base__container">
          <div className="base__header">ADD NEW ADDRESS</div>
          <div className="base__content">
            <div className="modal__form__header">CONTACT DETAILS</div>
            <div className="contact__details">

              <label htmlFor="">Name<span style={{ color: "red" }}>*</span></label>
              <br />
              <input
                className="address__modal__input"
                type="text"
                value={state.name}
                name="name"
                placeholder="Enter your Name"
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="">Address<span style={{ color: "red" }}>*</span></label>
              <br />
              <input
                className="address__modal__input"
                type="text"
                value={state.address}
                name="address"
                placeholder="Address"
                onChange={handleChange}
              />
              <br />
              <label htmlFor="">City<span style={{ color: "red" }}>*</span></label>
              <br />
              <input
                className="address__modal__input"
                type="text"
                value={state.city}
                name="city"
                placeholder="City"
                onChange={handleChange}
              />
              <br />
              <label htmlFor="">State<span style={{ color: "red" }}>*</span></label>
              <br />
              <select value={state.state} name="state" placeholder="State" className="address__modal__input" onChange={handleChange}>
                <option value="">Please Select State </option>
                {stateENUM.map((value, index) => {
                  return <option key={index} value={value}>{value}</option>
                })}
              </select>
              <br />
              <label htmlFor="">Pincode<span style={{ color: "red" }}>*</span></label>
              <br />
              <input
                className="address__modal__input"
                type="text"
                value={state.pincode}
                name="pincode"
                placeholder="Pincode"
                onChange={handleChange}
              />
              <br />
              <label htmlFor="">Phone<span style={{ color: "red" }}>*</span></label>
              <br />
              <input
                className="address__modal__input"
                type="text"
                value={state.phone}
                name="phone"
                placeholder="Enter your phone"
                onChange={handleChange}
              />
              <br />
              <div className="default__check">
                <input
                  type="checkbox"
                  checked={state.isDefault}
                  name="isDefault"
                  placeholder="isDefault"
                  onChange={handleChange}
                />
                <div className="check__text">Make this my Default address</div>
              </div>
              {!!errorMessage && <div className="address__error__message">{errorMessage}</div>}

            </div>
          </div>

          <div className="base__footer">
            <div className="base__button" onClick={handleSave}>
              {isModalValue ? "Save Address" : "ADD address"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressModal;

AddressModal.propTypes = {
  modalValue: PropTypes.object.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  addOrSaveAddress: PropTypes.func.isRequired
}