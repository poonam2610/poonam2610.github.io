import React from "react";
import { useHistory } from "react-router";
import * as ROUTES from "../../constants/Routes";
import { ACTIONS } from "../../context-management/constants";
import { useStateValue } from "../../context-management/StateProvider";
import { db } from "../../firebase-config/firebase";
import CheckoutProductCard from "../../helper-components/CheckoutProductCard/CheckoutProductCard";
import AddToBagButton from "../ProductDetails/AddToBagButton";
import "./Checkout.scss";


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    const newBasket = [];
    const history = useHistory();

    const removeDuplicate = (id, size) => {
        const index = newBasket.findIndex(obj => obj.id === id && obj.size === size);
        newBasket[index].quantity++;
    };

    basket.map(x => (newBasket.filter(a => a.id === x.id && a.size === x.size).length > 0) ? removeDuplicate(x.id, x.size) : newBasket.push({ ...x, quantity: 1 }));

    const clearFirebaseBasket = () => {
        if (!!user && basket.length > 0) {
            db.collection("user").doc(user?.uid).set({
                basket: [],
            });
            dispatch({
                type: ACTIONS.CLEAR_BASKET,
            })
        }
    }

    const handleProceedToPay = () => {
        console.log("navigate to payment page")
        history.push(`${ROUTES.CHECKOUT}${ROUTES.PAYMENT}`)
    }

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
                <div className="heading__left">
                    <h2 className="heading">Your items in bag</h2>
                    <button className="emptybag__button" onClick={clearFirebaseBasket}>EMPTY BAG</button>
                </div>
                <hr />
                {newBasket.map((value, i) => {
                    return <CheckoutProductCard key={i} value={value} ordered={false} />;
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
                                <td>Rs. {((totalPrice(basket) * 10) / 100).toFixed(2)}</td>
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
                                <td><strong>Rs. {(totalPrice(basket) + ((totalPrice(basket) * 10) / 100)).toFixed(2)}</strong></td>
                            </tr>
                        </tfoot>

                    </table>
                    <div className="order__button">
                        {basket.length > 0 && <AddToBagButton content="PLACE ORDER" handleClick={handleProceedToPay} />}
                    </div>
                </div>

            </div>
        </div>
    );



}

export default Checkout;
