import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import PageContainer from "../../components/UI/PageContainer";
import { THEMES } from "../../components/THEMES";
import Spinner from "../../components/UI/Spinner";
import OrderForm from "../../components/OrderForm";
import OrderCart from "../../components/OrderCart";

import {
  requestCartItems,
  receiveCartItems,
  requestCartItemsError,
} from "../../actions";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const CART = useSelector((state) => state.CART.currentCart);
  const TOTAL_PRICE = useSelector((state) => state.CART.totalPrice);
  const STATUS = useSelector((state) => state.CART.status);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

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

  return (
    <PageContainer>
      <Fixer>
        <PageTitle>Checkout Summary</PageTitle>
        <Layout>
          <OrderCart data={CART} price={TOTAL_PRICE} />
          <OrderForm data={CART} />
        </Layout>
      </Fixer>
    </PageContainer>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  /* position: relative; */
  margin-bottom: 10vh;

  @media (max-width: 1200px) {
    flex-flow: column;
  }
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 100%;
  margin-top: 5vh;
  margin-bottom: 5vh;

  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column; */

  border-radius: 12px;
  background-color: ${THEMES.Primary};

  color: white;
  font-size: 42px;
  font-weight: 400;
`;

const Fixer = styled.div`
  padding-top: 2px;
`;

export default CheckoutPage;
