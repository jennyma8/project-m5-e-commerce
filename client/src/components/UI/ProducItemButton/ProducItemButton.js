import React from "react";
import styled from "styled-components";
import { THEMES } from "../../THEMES";

const ProductItemButton = ({ children, onClickHandler }) => {
  return (
    <Wrapper onClick={onClickHandler}>
      <span>{children}</span>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  width: 300px;
  height: 4rem;
  cursor: pointer;
  border-radius: 8px;
  background-color: white;
  color: ${THEMES.Primary};
  border: 2px solid ${THEMES.Primary};
  outline: none;
  margin-top: 10vh;
  & span {
    font-size: 16px;
    font-weight: 400;
  }

  &:focus {
    border: 2px solid ${THEMES.Primary};
    background-color: ${THEMES.Primary};
    color: white;
  }

  &:hover {
    color: white;
    border: 2px solid ${THEMES.Primary};
    background-color: ${THEMES.Primary};
  }

  &:active {
    transform: scale(1.1);
  }
`;

export default ProductItemButton;
