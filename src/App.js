import "./App.scss";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/Routes";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Checkout from "./components/Checkout/Checkout";
import PrivateRoute from "./utility/PrivateRoute";
import { auth } from "./firebase-config/firebase";
import { useStateValue } from "./context-management/StateProvider";
import { ACTIONS } from "./context-management/constants";

function App() {
  const dispatch = useStateValue()[1];

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("authUser", authUser);
      if (authUser) {
        dispatch({
          type: ACTIONS.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: ACTIONS.SET_USER,
          user: null,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path={ROUTES.CHECKOUT}>
          <Header />
          <Checkout />
          <Footer />
        </PrivateRoute>
        <Route path={ROUTES.LOGIN}>
          hi this is login page
          {/*  <Modal /> */}
        </Route>
        <Route path={`${ROUTES.PRODUCTS}/:category`}>
          <Header />
          <Products />
          <Footer />
        </Route>
        <Route path={`${ROUTES.PRODUCT__DETAILS}/:id`}>
          <ProductDetails />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Header />
          <HomePage />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
