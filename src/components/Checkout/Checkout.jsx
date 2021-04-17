import React from 'react';
import { useStateValue } from '../../context-management/StateProvider';
import CheckoutProductCard from '../../helper-components/CheckoutProductCard/CheckoutProductCard';
import "./Checkout.scss";
function Checkout() {
    const { basket } = useStateValue()[0];
    const newBasket = [];

    const removeDuplicate = (id) => {
        const index = newBasket.findIndex(obj => obj.id === id);
        newBasket[index].quantity++;
    };

    basket.map(x => newBasket.filter(a => a.id === x.id).length > 0 ? removeDuplicate(x.id) : newBasket.push({ ...x, quantity: 1 }));

    const totalPrice = (basket) => {
        return Math.round(basket?.reduce((amount, item) => item.price + amount, 0) * Math.pow(10, 2)) / Math.pow(10, 2);
    }

    return (
        <div className="checkout">
            <div className="checkout__left">
                <h2 className="heading">Your Items in cart</h2>
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
                <button className="checkout__button">Proceed to Buy</button>
            </div>
        </div>
    )
}

export default Checkout
