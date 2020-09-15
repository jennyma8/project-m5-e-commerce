import React from "react";
import styled from "styled-components";
import Product from "./Product";

const Products = (props) => {
  return (
    <ProductsGrid>
      {props.data.items.map((item) => {
        return <Product key={item._id} data={item} />;
      })}
    </ProductsGrid>
  );
};

const ProductsGrid = styled.ul`
  /* display: flex;
  flex-flow: wrap; */

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 200px);
  row-gap: 20px;
  column-gap: 20px;
  border: 1px solid blue;

  @media (max-width: 800px) {
    justify-items: center;
    align-content: center;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }
`;

export default Products;
