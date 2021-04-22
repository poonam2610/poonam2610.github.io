import React from "react";
import { useStateValue } from "../../context-management/StateProvider";
import CheckoutProductCard from "../../helper-components/CheckoutProductCard/CheckoutProductCard";
import AddToBagButton from "../ProductDetails/AddToBagButton";
import "./Checkout.scss";


function Checkout() {
  const { basket } = useStateValue()[0];
  const newBasket = [];

  const removeDuplicate = (id) => {
    const index = newBasket.findIndex((obj) => obj.id === id);
    newBasket[index].quantity++;
  };

  basket.map((x) =>
    newBasket.filter((a) => a.id === x.id).length > 0
      ? removeDuplicate(x.id)
      : newBasket.push({ ...x, quantity: 1 })
  );

  const totalPrice = (basket) => {
    return (
      Math.round(
        basket?.reduce((amount, item) => item.price + amount, 0) *
          Math.pow(10, 2)
      ) / Math.pow(10, 2)
    );
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2 className="heading">Your items in bag</h2>
        <hr />
        {newBasket.map((value, i) => {
          return <CheckoutProductCard key={i} value={value} ordered = {false} />;
        })}
      </div>
      <div className="checkout__right">
        <h2>Price Details ({basket.length} items)</h2>
        <hr />
        <div className="subtotal">
          <table>
            <tbody>
            <tr>
              <td>Total MRP: </td>
              <td>
                Rs. {totalPrice(basket)}
              </td>
            </tr>
            <tr>
              <td>Convenience Fee</td>
              <td>Rs. {((totalPrice(basket) * 10)/100).toFixed(2)}</td>
            </tr>
            <tr>
            <td>
              <hr />
            </td>
            <td>
              <hr />
            </td>
            </tr>
            </tbody>
           <tfoot>
           <tr>
              <td>Total Amount</td>
              <td><strong>Rs. {(totalPrice(basket) + ((totalPrice(basket) * 10)/100)).toFixed(2)}</strong></td>
            </tr>
           </tfoot>
        
          </table>
          <div className="order__button"> 
       <AddToBagButton content="PLACE ORDER TO BUY" />
       </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
