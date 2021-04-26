import React from "react";
import "./YourOrders.scss";
import { useStateValue } from "../../context-management/StateProvider";
import CheckoutProductCard from "../../helper-components/CheckoutProductCard/CheckoutProductCard";

export default function YourOrders() {
  const { yourOrders } = useStateValue()[0];
  // const newBasket = [];


  // const removeDuplicate = (id, size) => {
  //   const index = newBasket.findIndex(obj => obj.id === id && obj.size === size);
  //   newBasket[index].quantity++;
  // };

  // yourOrders.map(x => (newBasket.filter(a => a.id === x.id && a.size === x.size).length > 0) ? removeDuplicate(x.id, x.size) : newBasket.push({ ...x, quantity: 1 }));


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
