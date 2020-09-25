import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../../containers/HomePage";
import ProductsPage from "../../containers/ProductsPage";
import CategoryPage from "../../containers/CategoryPage";
import Nav from "../Nav";
import ProductItemPage from "../../containers/ProductItemPage";
import About from "../About";
import CartContainer from "../../containers/CartContainer";
import Careers from "../Careers";
import CheckoutPage from "../../containers/CheckoutPage";
import OrderConfirmation from "../../containers/OrderConfirmation";
import Error from "../Error";
import Footer from "../Footer";

const Layout = () => {
  return (
    <Router>
      <Nav>
        <CartContainer />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/careers">
            <Careers />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact={true} path="/items/category/:category">
            <CategoryPage />
          </Route>
          <Route exact={true} path="/items/item/:id">
            <ProductItemPage />
          </Route>
          <Route path="/items">
            <ProductsPage />
          </Route>
          <Route exact={true} path="/checkout/:id">
            <OrderConfirmation />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route component={Error} />
        </Switch>
      </Nav>
      <Footer />
    </Router>
  );
};

export default Layout;
