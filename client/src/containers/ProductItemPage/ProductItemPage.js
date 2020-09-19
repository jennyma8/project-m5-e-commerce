import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PageContainer from "../../components/UI/PageContainer";
import Spinner from "../../components/UI/Spinner";
import ProductItemButton from "../../components/UI/ProducItemButton";
import {
  requestProductItem,
  receiveProductItem,
  receiveProductItemError,
  toggleCartDrawer,
} from "../../actions";
import { FiLink2 } from "react-icons/fi";

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
      dispatch(receiveProductItemError());
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    return () => {
      dispatch(toggleCartDrawer());
    };
  }, []);

  if (STATUS === "loading" || !PRODUCT) {
    return <Spinner />;
  }

  return (
    <PageContainer>
      <Wrapper>
        <ImageWrapper>
          <Image src={PRODUCT.imageSrc} alt="Product Item Image" />
        </ImageWrapper>
        <ItemWrapper>
          <Category>
            <StyledLink to={`/items/category/${PRODUCT.category}`}>
              {" "}
              {PRODUCT.category}
            </StyledLink>
          </Category>
          <Name>{PRODUCT.name}</Name>
          <Price>${PRODUCT.price}</Price>
          <Brand>
            Brand:
            <BrandLink href={PRODUCT.company.url}>
              {PRODUCT.company.name}
            </BrandLink>
          </Brand>
          <ProductItemButton>Add To Cart</ProductItemButton>
        </ItemWrapper>
      </Wrapper>
    </PageContainer>
  );
};

const Wrapper = styled.div`
  /* border: solid red 1px; */
  display: flex;
  height: 80vh;
  padding-top: 10vh;
  width: 80vw;
`;
const ImageWrapper = styled.div`
  /* border: dashed blue 1px; */
  flex: 2;
  margin-left: 5%;
`;
const ItemWrapper = styled.div`
  /* border: dotted orange 1px; */
  flex: 1;
  padding-left: 5%;
  padding-top: 5%;
`;

const Image = styled.img`
  width: 100%;
`;

const Category = styled.div`
  font-size: 0.5rem;
  font-style: italic;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Name = styled.div`
  font-size: 1rem;
`;

const Price = styled.div`
  color: lightgrey;
  font-size: 2rem;
`;

const Brand = styled.div`
  font-size: 0.75rem;
`;

const BrandLink = styled.a`
  text-decoration: none;
`;

export default ProductItemPage;
