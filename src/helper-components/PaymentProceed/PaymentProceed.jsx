import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ACTIONS } from "../../context-management/constants";
import { useStateValue } from "../../context-management/StateProvider";
import * as ROUTES from "../../constants/Routes";
import { userRef } from "../../firebase-config/firebase";
import PropTypes from "prop-types";
import DialogueBox from "../DialogueBox/DialogueBox";
import { totalPrice } from "../../context-management/reducer";

function PaymentProceed({ currentSelection, setIsRazorPayOpen }) {
  const [{ basket, user, address }, dispatch] = useStateValue();
  const [selectedAddress, setSelectedAddress] = useState("");
  const [showThankYouDialogue, setShowThankYouDialogue] = useState(false);
  const history = useHistory();
  const newBasket = [];

  const removeDuplicate = (id, size) => {
    const index = newBasket.findIndex(
      (obj) => obj.id === id && obj.size === size
    );
    newBasket[index].quantity++;
  };

  basket.map((x) =>
    newBasket.filter((a) => a.id === x.id && a.size === x.size).length > 0
      ? removeDuplicate(x.id, x.size)
      : newBasket.push({ ...x, quantity: 1 })
  );

  const handlePaymentResponse = (response) => {
    if (response?.razorpay_payment_id) {
      const basketWithTimeStamp = newBasket.map((element) => ({
        ...element,
        date: JSON.stringify(new Date()),
        paymentId: response?.razorpay_payment_id,
      }));
      dispatch({
        type: ACTIONS.ADD_TO_ORDER_HISTORY,
        items: basketWithTimeStamp,
      });
      userRef(user?.uid).update({
        basket: [],
      });
      dispatch({
        type: ACTIONS.CLEAR_BASKET,
      });
      setShowThankYouDialogue(true)
    }
  };

  const options = {
    key: "rzp_test_6HvBNtoO5YYgPp",
    amount: parseInt(((totalPrice(basket) + (totalPrice(basket) * 10) / 100).toFixed(2)) * 100), //  = INR 1
    currency: "INR",
    name: "WARDROBE",
    // description: "Test Transaction",
    handler: ((response) => {
      handlePaymentResponse(response)
    }),
    modal: {
      ondismiss: (() => setIsRazorPayOpen(false))
    },
    prefill: {
      name: user.phoneNumber || "",
      email: user.email || ""
    },
    notes: {
      address: selectedAddress || "",
    }
  };

  const openPayModal = () => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  useEffect(() => {
    setSelectedAddress({
      ...address.filter((address) => address.id === currentSelection)[0],
    });
    openPayModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {showThankYouDialogue && (
        <DialogueBox
          title="Order placed successfully."
          message="Thank you for shopping with us !!"
          yesButtonMessage="VIEW ORDERS"
          noButtonMessage="SHOP MORE"
          yes={() => { history.push(ROUTES.YOUR_ORDERS); setShowThankYouDialogue(false) }}
          no={() => { history.push(ROUTES.HOME); setShowThankYouDialogue(false) }}
        />
      )}
    </>
  );
}

export default PaymentProceed;

PaymentProceed.propTypes = {
  currentSelection: PropTypes.string.isRequired,
  setIsRazorPayOpen: PropTypes.func,
};
