import React from "react";
import PageContainer from "../../components/UI/PageContainer";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { receiveCartItems } from "../../actions/cart-actions";
import { useDispatch } from "react-redux";

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    try {
      fetch(`/cart/checkout/${id}`)
        .then((res) => res.json())
        .then((json) => dispatch(receiveCartItems(json)));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <PageContainer>
      <Title>Order #{id} Confirmed</Title>
    </PageContainer>
  );
};

const Title = styled.h1`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;

export default OrderConfirmation;
