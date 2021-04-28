import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import "./AddressModal.scss";

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

  useEffect(() => {
    if (modalValue) {
      setIsModalValue(true);
    }
  }, [modalValue]);

  const handleSave = () => {
    addOrSaveAddress(state);
    setIsModalOpen(false);
  };
  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value,
    });
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
              <label htmlFor="">Name</label>
              <br />
              <input
                className="address__modal__input"
                type="text"
                value={state.name}
                name="name"
                placeholder="Enter your Name"
                onChange={handleChange}
              />
              <br />
              <label htmlFor="">Address</label>
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
              <label htmlFor="">City</label>
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
              <label htmlFor="">State</label>
              <br />
              <input
                className="address__modal__input"
                type="text"
                value={state.state}
                name="state"
                placeholder="State"
                onChange={handleChange}
              />
              <br />
              <label htmlFor="">Pincode</label>
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
              <label htmlFor="">Phone</label>
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
            </div>
          </div>
         
            <div className="base__button" onClick={handleSave}>
              {isModalValue ? "Save Address" : "ADD address"}
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressModal;
