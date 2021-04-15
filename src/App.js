import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/Routes";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={ROUTES.CHECKOUT}>
            <Checkout />
          </Route>
          <Route path={ROUTES.LOGIN}>
            <h1>Login page</h1>
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
    </BrowserRouter>
  );
}

export default App;
