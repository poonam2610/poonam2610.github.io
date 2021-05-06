import "./App.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/Routes";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Checkout from "./components/Checkout/Checkout";
import PrivateRoute from "./utility/PrivateRoute";
import { useStateValue } from "./context-management/StateProvider";
import { ACTIONS } from "./context-management/constants";
import { auth, userRef } from "./firebase-config/firebase";
import Payment from "./components/Payment/Payment";
import ScrollToTop from "./utility/ScrollToTop";
import YourOrders from "./components/YourOrders/YourOrders";
import Modal from "./components/Modal/Modal";
import SearchProducts from "./components/SearchProducts/SearchProducts";

function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [isOpenModal, setIsOpenModal] = useState(false);

  //executes when user changes
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (!!authUser) {
        dispatch({
          type: ACTIONS.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: ACTIONS.SET_USER,
          user: null,
        });
        dispatch({
          type: ACTIONS.CLEAR_BASKET,
        });
        dispatch({
          type: ACTIONS.ADD_TO_ORDER_HISTORY,
          items: [],
        });
        dispatch({
          type: ACTIONS.CLEAR_BASKET,
        });
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fetch bag items for particular user if available
  useEffect(() => {
    if (!!user) {
      userRef(user?.uid)
        .get()
        .then((value) => {
          if (!value.exists) {
              userRef(user?.uid).set({})
          }
          const basketData = value.data()?.basket || [];
          const addressData = value.data()?.address || [];
          const yourOrdersData = value.data()?.yourOrders || [];
          dispatch({
            type: ACTIONS.ADD_TO_ORDER_HISTORY,
            items: yourOrdersData,
          });
          basketData.forEach((item) => {
            dispatch({
              type: ACTIONS.ADD_TO_BASKET,
              item: item,
            });
          });
          addressData.forEach((item) => {
            dispatch({
              type: ACTIONS.ADD_OR_MODIFY_ADDRESS,
              item: item,
            });
          });
        })
        .catch((e) => console.log(e.message));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // push to firebase database when ever basket items changes
  useEffect(() => {
    if (!!user) {
      if (basket?.length > 0) {
        userRef(user?.uid).update({
          basket: basket,
        });
      }
    }
  }, [basket, user]);

  //if user comes first time
  useEffect(() => {
    const firstTimeUser = localStorage.getItem("firstTimeUser");
    if (!user && !firstTimeUser) {
      setTimeout(() => {
        setIsOpenModal(true);
      }, 2000);

      localStorage.setItem("firstTimeUser", true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <div className="inbetween__content">
          <Switch>
            <PrivateRoute exact path={ROUTES.CHECKOUT}>
              <Checkout />
            </PrivateRoute>
            <PrivateRoute exact path={`${ROUTES.CHECKOUT}${ROUTES.PAYMENT}`}>
              <Payment />
            </PrivateRoute>
            <Route exact path={`${ROUTES.CATEGORY}/:category`}>
              <Products />
            </Route>
            <Route exact path={`${ROUTES.SEARCH}/:search`}>
              <SearchProducts />
            </Route>
            <Route exact path={`${ROUTES.CATEGORY}/:category/:id`}>
              <ProductDetails />
            </Route>
            <Route exact path={ROUTES.HOME}>
              <HomePage />
              {isOpenModal && <Modal setIsModalOpen={setIsOpenModal} />}
            </Route>
            <PrivateRoute exact path={ROUTES.YOUR_ORDERS}>
              <YourOrders />
            </PrivateRoute>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
