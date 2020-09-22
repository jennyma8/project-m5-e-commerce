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
  const TOTAL_QUANTITY = useSelector((state) => state.CART.totalQuantity);
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
      <PageTitle>Checkout Summary</PageTitle>
      <Layout>
        <OrderCart data={CART} />
        <PaymentSection>
          <SectionTitle>Payment</SectionTitle>
          <OrderForm />
        </PaymentSection>
      </Layout>
    </PageContainer>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  /* position: relative; */
  margin-bottom: 10vh;
`;

const SectionTitle = styled.h1`
  font-size: 22px;
  margin-bottom: 10px;
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 100%;
  margin-top: 5vh;
  margin-bottom: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  border-radius: 12px;
  background-color: ${THEMES.Primary};

  color: white;
  font-size: 42px;
  font-weight: 400;
`;

const CartSection = styled.div`
  flex: 5;
  min-height: 50vh;
  /* border: 1px solid red; */
`;

const PaymentSection = styled.div`
  background: hsla(0, 0%, 98%, 1);
  flex: 5;
  height: 100vh;
  margin-left: 10px;
  /* border: 1px solid blue; */
`;

// ############################ TABLE STYLING #######################

const Table = styled.table`
  /* border: 2px solid red; */
  width: 100%;
`;

const RowHeader = styled.tr`
  padding: 5px;

  & th {
    padding: 8px;
  }
`;

const RowContent = styled.tr`
  /* border: 1px solid goldenrod; */
  /* min-height: 80px; */
  & td {
    padding: 12px;
    vertical-align: middle;
  }
`;

const CellName = styled.td`
  text-align: left;
`;

const CellQuantity = styled.td`
  text-align: center;
  color: green;
`;

const CellPrice = styled.td`
  text-align: center;
`;

const ColName = styled.th``;

const ColQty = styled.th``;

const ColPrice = styled.th``;

export default CheckoutPage;
