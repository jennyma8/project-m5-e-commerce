import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "../../containers/HomePage";
import ProductsPage from "../../containers/ProductsPage";
import CategoryPage from "../../containers/CategoryPage";
import Nav from "../Nav";
import ProductItemPage from "../../containers/ProductItemPage";
import { toggleCartDrawer } from "../../actions";
import CartDrawer from "../UI/CartDrawer";
import CartSummary from "../CartSummary";

const Layout = () => {
  const dispatch = useDispatch();
  const MODALSTATUS = useSelector((state) => state.CART.purchasing);
  const [reduceNav, setReduceNav] = React.useState(false);
  function toggleReduce() {
    if (window.scrollY > 300) {
      setReduceNav(true);
    } else {
      setReduceNav(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener("scroll", toggleReduce);
  }, []);
  return (
    <Router>
      <Nav show={reduceNav}>
        <CartDrawer
          show={MODALSTATUS}
          close={() => dispatch(toggleCartDrawer())}
        >
          <CartSummary />
        </CartDrawer>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/careers">
            <h1>this is the careers page</h1>
          </Route>
          <Route path="/about">
            <h1>this is the about us page</h1>
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
        </Switch>
      </Nav>
    </Router>
  );
};

export default Layout;
