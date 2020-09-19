import React from "react";
import styled from "styled-components";
import { THEMES } from "../../THEMES";

const Button = ({ children, onClickHandler }) => {
  return (
    <Wrapper onClick={onClickHandler}>
      <span>{children}</span>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  width: 80%;
  height: 50px;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${THEMES.Primary};
  color: white;
  border: 2px solid ${THEMES.Primary};

  & span {
    font-size: 16px;
    font-weight: 400;
  }

  &:hover {
    color: white;
    border: 2px solid ${THEMES.Primary};
    background-color: ${THEMES.Primary};
  }

  &:active {
    outline: none;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    border: 2px solid ${THEMES.Primary};
    background-color: ${THEMES.Primary};
    color: white;
  }
`;

export default Button;
