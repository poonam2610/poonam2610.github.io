import React, { useEffect, useState } from "react";
import "./AddressCard.scss";
import PropTypes from "prop-types";

function AddressCard({
  data,
  handleAddressChange,
  removeAddress,
  editAddress,
  currentSelection,
  isDefaultAddress
}) {
  const [isDataAvailable, setIsDataAvailable] = useState(false);
  const { id, name, address, city, state, pincode, phone } = data;
  const [selectAddress, setSelectAddress] = useState(false);

  useEffect(() => {
    if (Object.keys(data).length === 0) {
      setIsDataAvailable(false);
    } else {
      setIsDataAvailable(true);
    }
    if (currentSelection === data.id) {
      setSelectAddress(true);
    } else {
      setSelectAddress(false);
    }
  }, [data, currentSelection]);

  const handleChange = (event) => {
    const { value } = event.target;
    // setSelectAddress(checked)
    handleAddressChange(value);
  };
  return (
    <>

      { !!isDataAvailable && <div className="address__card">
        <fieldset>
          <legend>{isDefaultAddress ? "Default Address" : ""}</legend>
          <div className="address__fieldset">
            <input className="address__radiobutton"
              type="radio"
              checked={selectAddress}
              value={id}
              onChange={handleChange}
            />
            <div className="address__details">
              <div className="name">
                <h4><strong> {name} </strong></h4>{" "}
              </div>
              <div className="full__address">
                <h5>{`${address},${city},${state},${pincode}`}</h5>{" "}
              </div>
              <div className="phone__number">
                <h5><strong>Mobile : </strong> {phone}</h5>
              </div>
              <button
                className="addressField__button"
                onClick={removeAddress}
                value={id}
              >
                Remove
              </button>
              <button
                className="addressField__button"
                onClick={editAddress}
                value={id}
              >
                Edit
              </button>
            </div>
          </div>
        </fieldset>
      </div>}
    </>
  );
}

export default AddressCard;

AddressCard.propTypes = {
  data: PropTypes.object.isRequired,
  handleAddressChange: PropTypes.func.isRequired,
  removeAddress: PropTypes.func.isRequired,
  editAddress: PropTypes.func.isRequired,
  currentSelection: PropTypes.string,
  isDefaultAddress: PropTypes.bool.isRequired
}
