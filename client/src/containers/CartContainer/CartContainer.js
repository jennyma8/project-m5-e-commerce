import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCartDrawer,
  requestCartItems,
  receiveCartItems,
  requestCartItemsError,
} from "../../actions";
import CartDrawer from "../../components/UI/CartDrawer";
import CartSummary from "../../components/CartSummary";

const CartContainer = () => {
  const dispatch = useDispatch();
  const STATUS = useSelector((state) => state.CART.purchasing);
  // const CART = useSelector((state) => state.CART.currentCart);

  // React.useEffect(() => {
  //   try {
  //     dispatch(requestCartItems());
  //     fetch("/cart")
  //       .then((res) => res.json())
  //       // .then((json) => console.log(json));
  //       .then((json) => dispatch(receiveCartItems(json)));
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(requestCartItemsError());
  //   }
  // }, []);

  return (
    <CartDrawer show={STATUS} close={() => dispatch(toggleCartDrawer())}>
      {/* <CartSummary data={CART} /> */}
      <CartSummary />
    </CartDrawer>
  );
};

export default CartContainer;
