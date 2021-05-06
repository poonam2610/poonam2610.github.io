import React, { useEffect } from "react";
import "./YourOrders.scss";
import { useStateValue } from "../../context-management/StateProvider";
import CheckoutProductCard from "../../helper-components/CheckoutProductCard/CheckoutProductCard";
import { userRef } from "../../firebase-config/firebase";

export default function YourOrders() {
  const { user, yourOrders } = useStateValue()[0];

  useEffect(() => {
    if (!!user) {
      if (yourOrders?.length > 0) {
        userRef(user?.uid).update({
          yourOrders: yourOrders,
        });
      }
    }
  }, [user, yourOrders]);

  return (
    <div className="your__orders__container">
      <div>
        <h2>Your Orders</h2>
      </div>
      <hr />
      <div className="your__orders__card_container">
        {yourOrders.length > 0 ? yourOrders?.map((value, index) => {
          return <CheckoutProductCard key={index} value={value} ordered={true} />;
        }) : <div className="empty__basket__card">Sorry! no previous orders</div>}
      </div>
    </div>
  );
}
