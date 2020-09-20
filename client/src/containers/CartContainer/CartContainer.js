import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartDrawer } from "../../actions";
import CartDrawer from "../../components/UI/CartDrawer";
import CartSummary from "../../components/CartSummary";

const CartContainer = () => {
  const dispatch = useDispatch();
  const STATUS = useSelector((state) => state.CART.purchasing);

  return (
    <CartDrawer show={STATUS} close={() => dispatch(toggleCartDrawer())}>
      <CartSummary />
    </CartDrawer>
  );
};

export default CartContainer;
