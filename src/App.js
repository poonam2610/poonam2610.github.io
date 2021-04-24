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
import { auth, db } from "./firebase-config/firebase";
import Payment from "./components/Payment/Payment";
import ScrollToTop from "./utility/ScrollToTop";
import YourOrders from "./components/YourOrders/YourOrders";

function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  // const [isOpenModal, setIsOpenModal] = useState(false);

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
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fetch bag items for particular user if available
  useEffect(() => {
    if (!!user && !!basket) {
      db.collection("user")
        .doc(user?.uid)
        .get()
        .then((value) => {
          const data = value.data()?.basket || [];
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

  // push to firebase database when ever basket items changes
  useEffect(() => {
    if (!!user) {
      if (basket?.length > 0) {
        db.collection("user").doc(user?.uid).set({
          basket: basket,
        });
      }
    }
  }, [basket, user]);

  //if user comes first time
  useEffect(() => {
    const firstTimeUser = localStorage.getItem("firstTimeUser");
    // console.log({notFirstTimeUser})
    if (!user && !firstTimeUser) {
      dispatch({
        type: ACTIONS.CHANGE_MODAL_STATE,
      });
      localStorage.setItem("firstTimeUser", true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className ="App">
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <PrivateRoute exact path={ROUTES.CHECKOUT}>
            <Header />
            <Checkout />
            <Footer />
          </PrivateRoute>
          <PrivateRoute exact path={`${ROUTES.CHECKOUT}${ROUTES.PAYMENT}`}>
            <Header />
            <Payment />
            <Footer />
          </PrivateRoute>
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
            {/* {isModalOpen && <Modal />} */}
          </Route>
          <PrivateRoute exact path={ROUTES.YOUR_ORDERS}>
            <Header />
            <YourOrders />
            <Footer />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
