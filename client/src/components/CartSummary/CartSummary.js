import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import CartButton from "../UI/CartButton";
import CartItem from "./CartItem";
import Spinner from "../UI/Spinner";
import {
  requestCartItems,
  receiveCartItems,
  requestCartItemsError,
  deleteAllCartItems,
  toggleCartDrawer,
} from "../../actions";
import { THEMES } from "../THEMES";
import { Link } from "react-router-dom";

const CartSummary = (props) => {
  const dispatch = useDispatch();
  const CART = useSelector((state) => state.CART.currentCart);
  const TOTAL_PRICE = useSelector((state) => state.CART.totalPrice);
  const TOTAL_QUANTITY = useSelector((state) => state.CART.totalQuantity);
  const STATUS = useSelector((state) => state.CART.status);

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

  if (STATUS === "loading" || !CART) {
    return <Spinner />;
  }

  function deleteAllItems() {
    const options = {
      method: "DELETE",
    };
    dispatch(deleteAllCartItems());
    fetch("/cart", options)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        dispatch(receiveCartItems(json));
      });
  }

  return (
    <Wrapper>
      <Header>
        <h1>Your Cart ({TOTAL_QUANTITY})</h1>
      </Header>
      <CartList>
        {TOTAL_QUANTITY > 0 ? (
          <>
            {CART.map((item) => {
              return <CartItem key={item._id} data={item} />;
            })}
          </>
        ) : (
          <h1>There are no Items in your cart.</h1>
        )}
      </CartList>
      <Price>Total: ${TOTAL_PRICE}</Price>
      <Footer>
        <ClearAllButton onClick={() => deleteAllItems()}>
          <span>Clear All</span>
        </ClearAllButton>
        <StyledLink to="/checkout">
          <CartButton
            onClickHandler={() => {
              dispatch(toggleCartDrawer());
            }}
          >
            Checkout
          </CartButton>
        </StyledLink>
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
  flex: 10;
  width: 95%;
  /* border: 1px solid red; */
  border-radius: 12px;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  padding: 10px;
  background: hsla(0, 0%, 98%, 0.6);
  margin-bottom: 20px;
`;

const Header = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  & h1 {
    font-size: 32px;
    font-weight: bold;
  }
`;

const Price = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin-bottom: 10px;
`;

const Footer = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  align-items: center;
  position: relative;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ClearAllButton = styled.button`
  width: 80%;
  height: 50px;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${THEMES.Secondary};
  color: white;
  border: 2px solid ${THEMES.Secondary};
  margin-bottom: 10px;

  & span {
    font-size: 16px;
    font-weight: 400;
  }

  &:hover {
    color: white;
    border: 2px solid ${THEMES.Secondary};
    background-color: ${THEMES.Secondary};
  }

  &:active {
    outline: none;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    border: 2px solid ${THEMES.Secondary};
    background-color: ${THEMES.Secondary};
    color: white;
  }
`;

export default CartSummary;
