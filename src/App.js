import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import * as ROUTES from "./constants/Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={ROUTES.CHECKOUT}>
            <h1>checkout page</h1>
          </Route>
          <Route path={ROUTES.LOGIN}>
            <h1>Login page</h1>
          </Route>
          <Route exact path={ROUTES.HOME}>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
