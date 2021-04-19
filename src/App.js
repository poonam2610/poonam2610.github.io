import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/Routes";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Checkout from "./components/Checkout/Checkout";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={ROUTES.CHECKOUT}>
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path={ROUTES.LOGIN}>
            <Modal />
          </Route>
          <Route path={`${ROUTES.PRODUCTS}/:category`}>
            <Header />
            <Products />
            <Footer />
          </Route>
          <Route path={`${ROUTES.PRODUCT__DETAILS}/:id`}>
            <Header />
            <ProductDetails />
            <Footer/>
          </Route>
          <Route exact path={ROUTES.HOME}>
            <Header />
            <HomePage />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
