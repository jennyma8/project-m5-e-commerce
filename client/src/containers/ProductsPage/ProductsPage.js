import React from "react";
import styled from "styled-components";
import PageContainer from "../../components/UI/PageContainer";

import Products from "../../components/Products";
import ProductsHeader from "../../components/ProductsHeader";

import { useSelector, useDispatch } from "react-redux";
import {
  requestCompanies,
  receiveCompanies,
  receiveCompaniesError,
} from "../../actions";

import { requestItems, receiveItems, receiveItemsError } from "../../actions";

import Spinner from "../../components/UI/Spinner";

const ProductsPage = () => {
  const dispatch = useDispatch();

  const ITEMS = useSelector((state) => state.DATA.allProducts);
  const CATEGORIES = useSelector((state) => state.DATA.categories);
  const STATUS = useSelector((state) => state.DATA.status);

  React.useEffect(() => {
    // try {
    //   dispatch(requestCompanies());
    //   fetch("/companies")
    //     .then((res) => res.json())
    //     // .then((json) => console.log(json));
    //     .then((json) => dispatch(receiveCompanies(json)));
    // } catch (error) {
    //   console.log(error);
    //   dispatch(receiveCompaniesError());
    // }

    try {
      dispatch(requestItems());
      fetch("/items")
        .then((res) => res.json())
        // .then((json) => console.log(json));
        .then((json) => dispatch(receiveItems(json)));
    } catch (error) {
      console.log("error");
      dispatch(receiveItemsError());
    }
  }, []);

  if (STATUS === "loading" || !ITEMS) {
    return <Spinner />;
  }

  return (
    <PageContainer>
      <ProductsHeader data={CATEGORIES} />
      <Test>
        {/* <Sidebar>This is the Sidebar</Sidebar> */}
        <Products data={ITEMS} />
      </Test>
    </PageContainer>
  );
};

const Sidebar = styled.h1`
  width: 700px;
  background: grey;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Test = styled.div`
  display: flex;
  /* border: 5px solid green; */
  justify-content: center;
`;

export default ProductsPage;
