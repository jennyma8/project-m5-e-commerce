import React from "react";
import styled from "styled-components";
import { FiXCircle } from "react-icons/fi";
import { THEMES } from "../../THEMES";
import { useDispatch } from "react-redux";
import { deleteCartItem, receiveCartItems } from "../../../actions";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const CART_ITEM = props.data;

  function deleteItem(id) {
    const options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };

    fetch(`/cart/${id}`, options)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        dispatch(deleteCartItem());
        dispatch(receiveCartItems(json));
      });
  }

  return (
    <Wrapper>
      <Content>
        <p>{CART_ITEM.name}</p>
        <Quantity>
          Quantity: <span>{CART_ITEM.quantity}</span>
        </Quantity>
        {CART_ITEM.maxQty && (
          <Warning>This is maximum amount available!</Warning>
        )}
        <Subtotal>
          Subtotal:
          <span>
            ${parseFloat(CART_ITEM.price * CART_ITEM.quantity).toFixed(2)}
          </span>
        </Subtotal>
      </Content>
      <Button onClick={() => deleteItem(CART_ITEM.id)}>
        <DeleteIcon size={32} />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  flex-flow: nowrap;
  margin: 15px 0;
  border-bottom: 2px solid gainsboro;
  padding-bottom: 3px;
`;

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Quantity = styled.p`
  color: green;
  font-style: italic;
  display: flex;
  & span {
    margin-left: 5px;
  }
`;

const Warning = styled.p`
  color: red;
`;

const Subtotal = styled.h1`
  & span {
    margin-left: 5px;
  }
`;

const DeleteIcon = styled(FiXCircle)`
  color: ${THEMES.Primary};
  padding: 0;
  &:hover {
    color: red;
  }
`;

const Button = styled.button`
  width: auto;
  height: auto;
  /* height: 20px; */
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:focus {
    transform: scale(0.9);
  }

  /* &:hover {
    color: red;
  } */
  /* &:hover {
    color: white;
    border: 2px solid ${THEMES.Secondary};
    background-color: ${THEMES.Secondary};
  } */

  &:active {
    transform: scale(0.9);
  }
`;

export default CartItem;
