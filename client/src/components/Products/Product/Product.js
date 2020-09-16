import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import { THEMES } from "../../THEMES";

const Product = (props) => {
  const ITEM = props.data;

  return (
    <Item>
      <Link to={`/items/item/${ITEM._id}`}>
        <Image src={ITEM.imageSrc} alt={`${ITEM.name}-${ITEM._id}`} />
      </Link>
      <Footer>
        <Title>{ITEM.name}</Title>
        <Price>{ITEM.price}</Price>
      </Footer>
      <BtnContainer>
        <Button onClickHandler={(ev) => console.log("Item was added to cart")}>
          Add to Cart
        </Button>
      </BtnContainer>
    </Item>
  );
};

const Item = styled.li`
  min-width: 0;
  min-height: 200px;
  /* border: 5px dashed red; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 1px solid gainsboro;
  border-radius: 12px;
  box-shadow: 0px 2px 2px 1px rgba(232, 232, 232, 0.75);
  padding: 15px;
`;

const Footer = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-right: 5px;
  margin-left: 5px;
`;

const Price = styled.h1`
  flex: 1;
  text-align: center;
  font-size: 22px;
  color: ${THEMES.Secondary};
`;

const Title = styled.h1`
  flex: 2;
  padding: 12px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Image = styled.img`
  flex: 5;
  width: 250px;
  height: 250px;

  @media (max-width: 1200px) {
    /* ... */
  }

  @media (max-width: 1024px) {
    /* ... */
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const BtnContainer = styled.div`
  flex: 2;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
`;

export default Product;
