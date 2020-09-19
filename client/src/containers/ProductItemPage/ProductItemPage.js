import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import PageContainer from "../../components/UI/PageContainer";
import Spinner from "../../components/UI/Spinner";
import {
  requestProductItem,
  receiveProductItem,
  receiveProductItemError,
  toggleCartDrawer,
} from "../../actions";

const ProductItemPage = () => {
  const dispatch = useDispatch();

  const PRODUCT = useSelector((state) => state.DATA.currentProduct);
  const STATUS = useSelector((state) => state.DATA.status);

  React.useEffect(() => {
    const URL = window.location.pathname;
    try {
      dispatch(requestProductItem());
      fetch(URL)
        .then((res) => res.json())
        .then((JSON) => dispatch(receiveProductItem(JSON)));
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (STATUS === "loading" || !PRODUCT) {
    return <Spinner />;
  }

  return (
    <PageContainer>
      <div>{PRODUCT.name}</div>
      <div>
        <div>ProductDescription</div>
        <div>Quantity</div>
        <div>CartButton</div>
      </div>
    </PageContainer>
  );
};

export default ProductItemPage;
