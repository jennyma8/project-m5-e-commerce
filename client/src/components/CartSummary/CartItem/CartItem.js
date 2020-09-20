import React from "react";
import styled from "styled-components";
import { FiXCircle } from "react-icons/fi";
import { THEMES } from "../../THEMES";

const CartItem = (props) => {
  const CART_ITEM = props.data;

  return (
    <Wrapper>
      <Content>
        <p>{CART_ITEM.name}</p>
        <Quantity>
          Quantity: <span>{CART_ITEM.quantity}</span>
        </Quantity>
      </Content>
      <DeleteItemButton size={32} />
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  height: auto;
  justify-content: space-between;
  align-items: center;
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
`;

const DeleteItemButton = styled(FiXCircle)`
  color: ${THEMES.Primary};
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export default CartItem;
