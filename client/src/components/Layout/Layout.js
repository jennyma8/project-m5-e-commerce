import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import HomePage from "../../containers/HomePage";
import ProductsPage from "../../containers/ProductsPage";
import Nav from "../Nav";

const Layout = () => {
  return (
    <Router>
      <Nav>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/careers">
            <h1>this is the careers page</h1>
          </Route>
          <Route path="/about">
            <h1>this is the careers page</h1>
          </Route>
          <Route path="/products/:id">
            <h1>This is the detailed product page</h1>
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
        </Switch>
      </Nav>
    </Router>
  );
};

export default Layout;
