import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Product = (props) => {
  const ITEM = props.data;
  console.log(ITEM);

  return (
    <Item>
      <Link to={`/items/${ITEM._id}`}>
        <Image src={ITEM.imageSrc} alt={`${ITEM.name}-${ITEM._id}`} />
      </Link>
      <Footer>
        <Title>{ITEM.name}</Title>
        <Price>{ITEM.price}</Price>
      </Footer>
      <button>Add to Cart</button>
    </Item>
  );
};

const Item = styled.li`
  min-width: 0;
  min-height: 200px;
  border: 5px dashed red;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-right: 5px;
  margin-left: 5px;
`;

const Price = styled.h1`
  flex: 1;
`;

const Title = styled.h1`
  flex: 2;
  padding: 12px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
`;

export default Product;
