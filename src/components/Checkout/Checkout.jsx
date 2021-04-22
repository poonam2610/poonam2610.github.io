import React from 'react';
import { ACTIONS } from '../../context-management/constants';
import { totalPrice } from '../../context-management/reducer';
import { useStateValue } from '../../context-management/StateProvider';
import { db } from '../../firebase-config/firebase';
import CheckoutProductCard from '../../helper-components/CheckoutProductCard/CheckoutProductCard';
import "./Checkout.scss";
function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    const newBasket = [];

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

    const handleProceedToPay=()=>{
        console.log("proceed to pay clicked")
    }


    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__header">
                    <h2 className="heading">Your Items in cart</h2>
                    <button className="checkout__clear" onClick={clearFirebaseBasket}>clear all-cart Items</button>
                </div>
                <hr />
                {newBasket.map((value, i) => {
                    return <CheckoutProductCard key={i} value={value} />
                })}
            </div>
            <div className="checkout__right">
                <div className="subtotal">
                    <span className="subtotal__heading">Subtotal({basket.length} items): <strong>Rs {totalPrice(basket)}</strong></span>
                </div>
                <div className="subtotal__text">This items Contains Gift</div>
                < button className={`checkout__button ${basket?.length < 1 ? "disable" : ""}`} disabled={basket.length < 1} onClick={handleProceedToPay}>Proceed to Buy</button>
            </div>
        </div >
    )
}

export default Checkout
