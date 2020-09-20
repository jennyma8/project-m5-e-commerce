import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import CartButton from "../UI/CartButton";
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
              return <li>{item.name}</li>;
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
  min-height: 100vh;
`;

const CartList = styled.div`
  flex: 8;
  width: 95%;
  border: 1px solid red;
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
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export default CartSummary;
