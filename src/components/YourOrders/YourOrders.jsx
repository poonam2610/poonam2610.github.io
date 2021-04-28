import React from "react";
import "./YourOrders.scss";
import { useStateValue } from "../../context-management/StateProvider";
import CheckoutProductCard from "../../helper-components/CheckoutProductCard/CheckoutProductCard";

export default function YourOrders() {
  const { yourOrders } = useStateValue()[0];
  
  return (
    <div className="your__orders__container">
      <div>
        <h2>Your Orders</h2>
      </div>
      <hr />
      <div className="your__orders__card_container">
        {yourOrders?.map((value, index) => {
          return <CheckoutProductCard key={index} value={value} ordered={true} />;
        })}
      </div>
    </div>
  );
}
