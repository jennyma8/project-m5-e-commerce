import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import CartButton from "../UI/CartButton";
import CartItem from "./CartItem";
import {
  requestCartItems,
  receiveCartItems,
  requestCartItemsError,
} from "../../actions";

const CartSummary = (props) => {
  const dispatch = useDispatch();
  const CART = useSelector((state) => state.CART.currentCart);

  React.useEffect(() => {
    try {
      dispatch(requestCartItems());
      fetch("/cart")
        .then((res) => res.json())
        // .then((json) => console.log(json));
        .then((json) => dispatch(receiveCartItems(json)));
    } catch (error) {
      console.log(error);
      dispatch(requestCartItemsError());
    }
  }, []);

  // const COUNT = props.data.length;
  // const CART = props.data;

  return (
    <Wrapper>
      <Header>
        <h1>Your Cart ({CART.length})</h1>
      </Header>
      <CartList>
        {CART.length > 0 ? (
          <>
            {CART.map((item) => {
              return <CartItem key={item._id} data={item} />;
            })}
          </>
        ) : (
          <h1>There are no Items in your cart.</h1>
        )}
      </CartList>
      <Footer>
        <CartButton>Checkout</CartButton>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  /* max-height: 100vh; */
  height: 100%;
`;

const CartList = styled.ul`
  flex: 8;
  width: 95%;
  /* border: 1px solid red; */
  border-radius: 12px;
  height: 100%;
  /* overflow: hidden; */
  padding: 10px;
  background: hsla(0, 0%, 98%, 0.6);
  margin-bottom: 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  & h1 {
    font-size: 32px;
    font-weight: bold;
  }
`;

const Footer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

export default CartSummary;
