import "./App.scss";
import React, { useContext, useEffect } from "react";
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
import FirebaseContext from "./firebase-config/context";

function App() {
  const firebase = useContext(FirebaseContext);
  const dispatch = useStateValue()[1];
  useEffect(() => {
    firebase.auth.onAuthStateChanged((authUser) => {
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
      <BrowserRouter>
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
          <Route exact path={`${ROUTES.CATEGORY}/:category`}>
            <Header />
            <Products />
            <Footer />
          </Route>
          <Route exact path={`${ROUTES.CATEGORY}/:category/:id`}>
            <ProductDetails />
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
