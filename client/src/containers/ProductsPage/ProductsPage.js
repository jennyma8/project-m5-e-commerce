import React from "react";
import styled from "styled-components";
import PageContainer from "../../components/UI/PageContainer";

import Products from "../../components/Products";
import ProductsHeader from "../../components/ProductsHeader";

import { useSelector, useDispatch } from "react-redux";
import {
  requestCategories,
  receiveCategories,
  receiveCategoriesError,
} from "../../actions";

import { requestItems, receiveItems, receiveItemsError } from "../../actions";

import Spinner from "../../components/UI/Spinner";

const ProductsPage = () => {
  const dispatch = useDispatch();

  const ITEMS = useSelector((state) => state.DATA.allProducts);
  const CATEGORIES = useSelector((state) => state.DATA.categories);
  const STATUS = useSelector((state) => state.DATA.status);

  React.useEffect(() => {
    // This should be fetching "/items"
    const URL = window.location.pathname;
    try {
      dispatch(requestItems());
      fetch(URL)
        .then((res) => res.json())
        // .then((json) => console.log(json));
        .then((json) => dispatch(receiveItems(json)));
    } catch (error) {
      console.log("error");
      dispatch(receiveItemsError());
    }
    // This is to fetch the categories data
    try {
      dispatch(requestCategories());
      fetch("/items/category")
        .then((res) => res.json())
        // .then((json) => console.log(json));
        .then((json) => dispatch(receiveCategories(json)));
    } catch (error) {
      console.log(error);
      dispatch(receiveCategoriesError());
    }
  }, []);

  if (STATUS === "loading" || !ITEMS) {
    return <Spinner />;
  }

  return (
    <PageContainer>
      <ProductsHeader data={CATEGORIES} />
      <Test>
        <Products data={ITEMS} />
      </Test>
    </PageContainer>
  );
};

const Test = styled.div`
  display: flex;
  /* border: 5px solid green; */
  justify-content: center;
`;

export default ProductsPage;
