import "./App.scss";
import React, { useEffect } from "react";
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
import Modal from "./components/Modal/Modal";
import { auth, db } from "./firebase-config/firebase";

function App() {
  const [{ basket, user, isModalOpen}, dispatch] = useStateValue();

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
      }
    });
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!!user && !!basket) {
      db.collection("user")
        .doc(user.uid)
        .get()
        .then((value) => {
          const data = value.data()?.basket || [];
          // console.log(data);
          data.forEach((item) => {
            dispatch({
              type: ACTIONS.ADD_TO_BASKET,
              item: item,
            });
          });
        })
        .catch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (!!user) {
      if (basket?.length > 0) {
        db.collection("user").doc(user?.uid).set({
          basket: basket,
        });
      }
    }
  }, [basket, user]);

  return (
    <div className= {`App ${isModalOpen ? "blurred": "" }`}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path={ROUTES.CHECKOUT}>
            <Header />
            <Checkout />
            <Footer />
          </PrivateRoute>
          <Route path={ROUTES.LOGIN}>
            <Modal />
          </Route>
          <Route exact path={`${ROUTES.CATEGORY}/:category`}>
            <Header />
            <Products />
            <Footer />
          </Route>
          <Route exact path={`${ROUTES.CATEGORY}/:category/:id`}>
            <Header />
            <ProductDetails />
            <Footer />
          </Route>
          <Route exact path={ROUTES.HOME}>
            <Header />
            <HomePage />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
