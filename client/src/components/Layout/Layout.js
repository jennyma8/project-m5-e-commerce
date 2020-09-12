import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../../containers/HomePage";
import ProductsPage from "../../containers/ProductsPage";

const Layout = () => {
  return (
    <Router>
      <nav>
        <h1>This is the Navitation Bar</h1>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/careers">Careers</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/careers">
            <h1>this is the careers page</h1>
          </Route>
          <Route path="/about">
            <h1>this is the careers page</h1>
          </Route>
        </Switch>
      </nav>
    </Router>
  );
};

export default Layout;
