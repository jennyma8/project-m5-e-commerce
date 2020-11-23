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
  receiveCartItems,
} from "../../actions";
import { addCartItem } from "../../actions";
import { THEMES } from "../../components/THEMES";

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

  if (STATUS === "loading" || !PRODUCT) {
    return <Spinner />;
  }

  function addItems(q, id) {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        quantity: parseInt(q),
      }),
    };

    fetch("/cart", options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(addCartItem());
        dispatch(receiveCartItems(json));
      });
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
          <div>
            Available quantity:{" "}
            <span>
              {PRODUCT.numInStock !== 0 ? PRODUCT.numInStock : "Out of Stock"}
            </span>
          </div>
          <form>
            <label for="quantity">Quantity: </label>
            <select
              id="quantity"
              name="quantity"
              disabled={PRODUCT.numInStock === 0}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </form>

          <Brand>
            Brand:
            <BrandLink target="_blank" href={PRODUCT.company.url}>
              {PRODUCT.company.name}
            </BrandLink>
          </Brand>
          {PRODUCT.numInStock > 0 && (
            <ProductItemButton
              onClickHandler={() => {
                const quantity = document.getElementById("quantity").value;
                addItems(quantity, PRODUCT._id);
              }}
            >
              Add To Cart
            </ProductItemButton>
          )}
        </ItemWrapper>
      </Wrapper>
    </PageContainer>
  );
};

const Wrapper = styled.div`
  align-items: center;
  /* border: solid red 1px; */
  display: flex;
  height: 100%;
  justify-content: center;
  padding-top: 10vh;
  position: relative;
  width: 100%;

  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
    /* background: pink; */
    flex-flow: column wrap;
  }
  @media (max-width: 768px) {
    /* background: green; */
    flex-flow: column wrap;
  }
`;
const ImageWrapper = styled.div`
  /* border: dashed blue 1px; */
  display: flex;
  flex: 2;
  justify-content: center;
  /* margin-left: 5%; */
`;
const ItemWrapper = styled.div`
  /* border: dotted orange 1px; */
  flex: 1;
  padding-left: 5%;
  padding-top: 5%;
`;

const Image = styled.img`
  width: 500px;
`;

const Category = styled.div`
  font-size: 1rem;
  font-style: italic;
`;

const StyledLink = styled(Link)`
  color: ${THEMES.Secondary};
  text-decoration: none;
`;

const Name = styled.div`
  font-size: 1.5rem;
`;

const Price = styled.div`
  color: grey;
  font-size: 3rem;
`;

const Brand = styled.div`
  font-size: 1.5rem;
`;

const BrandLink = styled.a`
  text-decoration: none;
`;

export default ProductItemPage;
