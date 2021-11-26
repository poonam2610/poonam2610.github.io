import React, { useState } from "react";
import { useHistory } from "react-router";
import * as ROUTES from "../../constants/Routes";
import { ACTIONS } from "../../context-management/constants";
import { useStateValue } from "../../context-management/StateProvider";
import { clearFirebaseBasket } from "../../firebase-config/firebase";
import CheckoutProductCard from "../../helper-components/CheckoutProductCard/CheckoutProductCard";
import DialogueBox from "../../helper-components/DialogueBox/DialogueBox";
import PriceTable from "../../helper-components/PriceTable/PriceTable";
import "./Checkout.scss";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [openDialogueBox, setOpenDialogueBox] = useState(false);
  const newBasket = [];
  const history = useHistory();

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

  const clearBasket = () => {
    if (!!user && basket.length > 0) {
      clearFirebaseBasket(user)
      dispatch({
        type: ACTIONS.CLEAR_BASKET,
      });
    }
    setOpenDialogueBox(false)
  };

  const handleProceedToPay = () => {
    history.push(`${ROUTES.CHECKOUT}${ROUTES.PAYMENT}`);
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="heading__left">
          <h2 className="heading">Your items in cart</h2>
          <button
            className="emptybag__button"
            onClick={() => setOpenDialogueBox(true)}
          >
            EMPTY CART
          </button>
          {openDialogueBox && (
            <DialogueBox
              title="Empty Cart"
              message="Are you sure you want to remove all items from cart?"
              yes={clearBasket}
              no={() => setOpenDialogueBox(false)}
              yesButtonMessage="EMPTY CART"
              noButtonMessage="CANCEL"
            />
          )}
        </div>
        <hr />
        {newBasket.length > 0 ? newBasket.map((value, i) => {
          return <CheckoutProductCard key={i} value={value} ordered={false} />;
        }) : <div className="empty__basket__card"><div>There is nothing in your cart.</div> <div>Let's add some Items.</div></div>}
      </div>
      {newBasket.length > 0 && <div className="checkout__right">
        <PriceTable
          buttonTitle="PLACE ORDER"
          handleClick={handleProceedToPay}
        />
      </div>}
    </div>
  );
}

export default Checkout;
