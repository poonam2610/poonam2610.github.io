import React from "react";
import { useHistory } from "react-router";
import * as ROUTES from "../../constants/Routes";
import { ACTIONS } from "../../context-management/constants";
import { useStateValue } from "../../context-management/StateProvider";
import { clearFirebaseBasket, userRef } from "../../firebase-config/firebase";
import CheckoutProductCard from "../../helper-components/CheckoutProductCard/CheckoutProductCard";
import PriceTable from "../../helper-components/PriceTable/PriceTable";
import "./Checkout.scss";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
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
  };

  const handleProceedToPay = () => {
    history.push(`${ROUTES.CHECKOUT}${ROUTES.PAYMENT}`);
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="heading__left">
          <h2 className="heading">Your items in bag</h2>
          <button className="emptybag__button" onClick={clearBasket}>
            EMPTY BAG
          </button>
        </div>
        <hr />
        {newBasket.map((value, i) => {
          return <CheckoutProductCard key={i} value={value} ordered={false} />;
        })}
      </div>
      <div className="checkout__right">
        <PriceTable
          buttonTitle="PLACE ORDER"
          handleClick={handleProceedToPay}
        />
      </div>
    </div>
  );
}

export default Checkout;
