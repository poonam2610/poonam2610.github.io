import { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { ACTIONS } from '../../context-management/constants';
import { totalPrice } from '../../context-management/reducer';
import { useStateValue } from '../../context-management/StateProvider';
import * as ROUTES from "../../constants/Routes";
import { userRef } from '../../firebase-config/firebase';
import PropTypes from "prop-types";

function PaymentProceed({ currentSelection, setIsRazorPayOpen }) {
    const [{ basket, user, address }, dispatch] = useStateValue();
    const [selectedAddress, setSelectedAddress] = useState("");
    const history = useHistory();
    const newBasket = []



    const removeDuplicate = (id, size) => {
        const index = newBasket.findIndex(obj => obj.id === id && obj.size === size);
        newBasket[index].quantity++;
    };

    basket.map(x => (newBasket.filter(a => a.id === x.id && a.size === x.size).length > 0) ? removeDuplicate(x.id, x.size) : newBasket.push({ ...x, quantity: 1 }));

    const handlePaymentResponse = (response) => {
        const basketWithTimeStamp = newBasket.map(element => ({ ...element, date: JSON.stringify(new Date()) }))
        if (response?.razorpay_payment_id) {
            dispatch({
                type: ACTIONS.ADD_TO_ORDER_HISTORY,
                items: basketWithTimeStamp
            });
            userRef(user?.uid).update({
                basket: [],
            });
            dispatch({
                type: ACTIONS.CLEAR_BASKET,
            });
            history.push(ROUTES.YOUR_ORDERS);
        }

    }

    const options = {
        key: "rzp_test_6HvBNtoO5YYgPp",
        amount: ((totalPrice(basket) + (totalPrice(basket) * 10) / 100)).toFixed(2) * 100, //  = INR 1
        currency: "INR",
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
        setSelectedAddress({ ...address.filter(address => address.id === currentSelection)[0] })
        openPayModal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (null)
}

export default PaymentProceed;

PaymentProceed.propTypes = {
    currentSelection: PropTypes.string.isRequired,
    setIsRazorPayOpen: PropTypes.func,
}
