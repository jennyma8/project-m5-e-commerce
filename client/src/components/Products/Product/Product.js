import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import { THEMES } from "../../THEMES";
import { useDispatch } from "react-redux";
import { addCartItem, receiveCartItems } from "../../../actions";

const Product = (props) => {
  const ITEM = props.data;
  const dispatch = useDispatch();

  function addSingleItem() {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: ITEM._id,
        quantity: 1,
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
    <Item>
      <ImageContainer to={`/items/item/${ITEM._id}`}>
        <Image src={ITEM.imageSrc} alt={`${ITEM.name}-${ITEM._id}`} />
      </ImageContainer>
      <Content>
        <Description>
          <Title>{ITEM.name}</Title>
          <Price>${ITEM.price}</Price>
        </Description>
        <BtnContainer>
          <Button
            onClickHandler={() => addSingleItem()}
            disabled={props.stock === 0}
          >
            {props.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </Button>
        </BtnContainer>
      </Content>
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
  border: 2px solid gainsboro;
  border-radius: 12px;
  box-shadow: 0px 2px 3px 2px rgba(232, 232, 232, 0.85);
  padding: 15px;
`;

const Content = styled.div`
  display: flex;
  flex: 5;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
  }
`;

const Description = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-right: 5px;
  margin-left: 5px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
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
  margin-bottom: 12px;
  @media (max-width: 768px) {
  }
`;

const ImageContainer = styled(Link)`
  position: relative;
  overflow: hidden;
  outline: none;

  &:hover img {
    filter: brightness(100%);
    transform: rotate(5deg) scale(0.9);
  }

  &:focus img {
    filter: brightness(100%);
    transform: rotate(5deg) scale(0.9);
  }
`;

const Image = styled.img`
  flex: 5;
  object-fit: cover;
  transition: all 1s ease;
  width: 250px;
  height: 250px;
  border-radius: 10px;

  &:focus {
    filter: brightness(100%);
    transform: rotate(5deg) scale(0.9);
  }

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
  align-items: center;
  justify-content: flex-end;
`;

export default Product;
