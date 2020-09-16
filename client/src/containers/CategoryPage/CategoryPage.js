import React from "react";
import styled from "styled-components";
import PageContainer from "../../components/UI/PageContainer";

import Products from "../../components/Products";

import { useSelector, useDispatch } from "react-redux";
import {
  requestCompanies,
  receiveCompanies,
  receiveCompaniesError,
} from "../../actions";
import { returnCategoryNameFromURL } from "../../helpers/utilities";
import { requestItems, receiveItems, receiveItemsError } from "../../actions";

import Spinner from "../../components/UI/Spinner";
import { THEMES } from "../../components/THEMES";
import ProductsHeader from "../../components/ProductsHeader";

const CategoryPage = () => {
  const dispatch = useDispatch();

  console.log(returnCategoryNameFromURL(window.location.pathname));
  const ITEMS = useSelector((state) => state.DATA.allProducts);
  const CATEGORIES = useSelector((state) => state.DATA.categories);
  const STATUS = useSelector((state) => state.DATA.status);

  React.useEffect(() => {
    // This should be fetching "/items/category/:category"
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
  }, []);

  if (STATUS === "loading" || !ITEMS) {
    return <Spinner />;
  }
  return (
    <PageContainer>
      <Header>{returnCategoryNameFromURL(window.location.pathname)}</Header>
      <Test>
        {/* <Sidebar>This is the Sidebar</Sidebar> */}
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

const Header = styled.div`
  height: 30vh;
  width: 100%;
  margin-bottom: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  font-size: 46px;
  border-radius: 12px;
  background-color: ${THEMES.Primary};
  color: white;
`;

export default CategoryPage;
