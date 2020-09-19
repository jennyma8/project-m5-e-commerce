import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import CartButton from "../UI/CartButton";

const CartSummary = (props) => {
  const ORDER = useSelector((state) => state.CART.currentCart);

  return (
    <Wrapper>
      <Header>
        <h1>Your Cart ({ORDER.length})</h1>
      </Header>
      <CartList>
        {ORDER.length > 0 ? (
          <>
            {ORDER.map((item) => {
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
