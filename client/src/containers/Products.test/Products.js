import React from "react";
import styled from "styled-components";
import Product from "./Product";
import Spinner from "../../components/UI/Spinner";

import { useSelector, useDispatch } from "react-redux";
import { requestItems, receiveItems, receiveItemsError } from "../../actions";

const Products = () => {
  const dispatch = useDispatch();

  const ITEMS = useSelector((state) => state.DATA.allProducts);
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
  }, []);

  if (STATUS === "loading" || !ITEMS) {
    return <Spinner />;
  }

  return (
    <ProductsGrid>
      {/* {props.data.items.map((item) => {
        return <Product key={item._id} data={item} index={item.index} />;
      })} */}
      {ITEMS.items.map((item) => {
        return (
          <Product
            key={item._id}
            data={item}
            stock={item.numInStock}
            index={item.index}
          />
        );
      })}
    </ProductsGrid>
  );
};

const ProductsGrid = styled.ul`
  /* display: flex;
  flex-flow: wrap; */

  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(auto, 200px);
  row-gap: 20px;
  column-gap: 20px;
  /* border: 1px solid blue; */

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto, 200px);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto, 200px);
  }

  @media (max-width: 768px) {
    justify-items: center;
    align-content: center;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto, 180px);
  }
`;

export default Products;
