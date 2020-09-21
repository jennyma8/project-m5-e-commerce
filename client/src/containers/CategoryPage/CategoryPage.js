import React from "react";
import styled from "styled-components";
import PageContainer from "../../components/UI/PageContainer";

import Products from "../../components/Products";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { requestItems, receiveItems, receiveItemsError } from "../../actions";

import { FiArrowLeft } from "react-icons/fi";
import Spinner from "../../components/UI/Spinner";
import { THEMES } from "../../components/THEMES";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const ITEMS = useSelector((state) => state.DATA.allProducts);
  const STATUS = useSelector((state) => state.DATA.status);
  const history = useHistory();

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
      <HeaderContainer>
        <BackButton onClick={() => history.goBack()}>
          <StyledArrow size={54} />
        </BackButton>
        <Header>
          <span>{category}</span>
        </Header>
      </HeaderContainer>

      <Test>
        {/* <Sidebar>This is the Sidebar</Sidebar> */}
        <Products data={ITEMS} />
        {/* <Products /> */}
      </Test>
    </PageContainer>
  );
};

const Test = styled.div`
  display: flex;
  /* border: 5px solid green; */
  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledArrow = styled(FiArrowLeft)`
  color: white;
`;

const BackButton = styled.button`
  border-radius: 12px 0 0 12px;
  border: none;
  outline: none;
  height: 30vh;
  width: 60px;
  background-color: ${THEMES.Primary};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(60, 55, 68, 0.85);
  }

  &:focus {
    background-color: rgba(60, 55, 68, 0.85);
  }
`;

const Header = styled.div`
  height: 30vh;
  width: 100%;
  margin-top: 5vh;
  margin-bottom: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  border-radius: 0 12px 12px 0;
  background-color: ${THEMES.Primary};

  & span {
    color: white;
    font-size: 56px;
    margin-right: 60px;
  }
`;

export default CategoryPage;
