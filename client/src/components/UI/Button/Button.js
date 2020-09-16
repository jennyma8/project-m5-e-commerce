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
  width: 200px;
  height: 2.3rem;
  cursor: pointer;
  border-radius: 8px;
  background-color: white;
  color: ${THEMES.Secondary};
  border: 2px solid ${THEMES.Secondary};

  & span {
    font-size: 16px;
    font-weight: 400;
  }

  &:hover {
    color: white;
    border: 2px solid ${THEMES.Secondary};
    background-color: ${THEMES.Secondary};
  }

  &:active {
    outline: none;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    border: 2px solid ${THEMES.Secondary};
    background-color: ${THEMES.Secondary};
    color: white;
  }
`;

export default Button;
