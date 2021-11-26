import React, { useEffect, useState } from "react";
import { ACTIONS } from "../../context-management/constants";
import { useStateValue } from "../../context-management/StateProvider";
import { userRef } from "../../firebase-config/firebase";
import AddressCard from "../../helper-components/AddressCard/AddressCard";
import AddressModal from "../../helper-components/AddressModal/AddressModal";
import "./Payment.scss";
import PaymentProceed from "../../helper-components/PaymentProceed/PaymentProceed";
import PriceTable from "../../helper-components/PriceTable/PriceTable";


function Payment() {
  const [{ address, user }, dispatch] = useStateValue();
  const [defaultAddress, setDefaultAddress] = useState({});
  const [otherAddress, setOtherAddress] = useState([]);
  const [currentSelection, setCurrentSelection] = useState();
  const [isRazorPayOpen, setIsRazorPayOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  // const data = ;

  const [modalValue, setModalValue] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    if (currentSelection) {
      setErrorMessage("")
    }
  }, [currentSelection])

  useEffect(() => {
    setDefaultAddress({ ...address?.filter((x) => x.isDefault)[0] });
    setOtherAddress(address.filter((x) => !x.isDefault));
    if (!!user) {
      if (address?.length > 0) {
        userRef(user?.uid).update({
          address: address,
        });
      }
    }
    // setCurrentSelection(defaultAddress?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, user]);

  useEffect(() => {
    setCurrentSelection(defaultAddress?.id);
  }, [defaultAddress]);

  const handleAddressChange = (id) => {
    setCurrentSelection(id);
  };

  const removeAddress = (e) => {
    const id = e.target?.value;
    dispatch({
      type: ACTIONS.REMOVE_ADDRESS,
      id: id,
    });
  };

  const editAddress = (e) => {
    const id = e.target.value;
    const modalData = { ...address.filter((x) => x.id === id)[0] };
    setModalValue(modalData);
    setIsModalOpen(true);
  };
  const addOrSaveAddress = (value) => {
    dispatch({
      type: ACTIONS.ADD_OR_MODIFY_ADDRESS,
      item: value,
    });
    // const { id } = value;
  };
  const handleAddressModal = () => {
    setModalValue({});
    setIsModalOpen(true);
  };

  const handlePayment = () => {
    // history.push(ROUTES.PROCEED_TO_PAY);
    if (currentSelection) {
      setIsRazorPayOpen(true);
      setErrorMessage("")
    } else {
      setErrorMessage("Please select address")
    }

  };

  return (
    <div className="address__main__container">
      <div className="address__container">
        <div className="address__header">
          <h2 className="address__title">Select Delivery Address</h2>
          <button
            className="add__new__address__button"
            onClick={handleAddressModal}
          >
            ADD NEW ADDRESS
          </button>
        </div>
        <hr />
        <div className="default__address__container">
          <AddressCard
            data={defaultAddress}
            currentSelection={currentSelection}
            handleAddressChange={handleAddressChange}
            removeAddress={removeAddress}
            editAddress={editAddress}
            isDefaultAddress={true}
          />
        </div>
        <div className="other__address__container">
          <div className="other__address__title">
            {" "}
            <h3>Other Addresses </h3>{" "}
          </div>
          {otherAddress.map((value, index) => {
            return (
              <AddressCard
                key={index}
                data={value}
                currentSelection={currentSelection}
                handleAddressChange={handleAddressChange}
                removeAddress={removeAddress}
                editAddress={editAddress}
                isDefaultAddress={false}
              />
            );
          })}
        </div>
      </div>
      <div className="pay__button">
        <PriceTable
          buttonTitle="PAY NOW"
          handleClick={handlePayment}
        />
        <div className="error__message">{errorMessage}</div>
      </div>
      {!!isModalOpen && (
        <AddressModal
          modalValue={modalValue}
          setIsModalOpen={setIsModalOpen}
          addOrSaveAddress={addOrSaveAddress}
        />
      )}
      {!!isRazorPayOpen && (
        <PaymentProceed
          currentSelection={currentSelection}
          setIsRazorPayOpen={setIsRazorPayOpen}
        />
      )}
    </div>
  );
}

export default Payment;
