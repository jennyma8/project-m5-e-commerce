import React from "react";
import styled from "styled-components";
import { THEMES } from "../../THEMES";

const Button = ({ children, onClickHandler, disabled }) => {
  return (
    <Wrapper onClick={onClickHandler} disabled={disabled}>
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
  outline: none;
  & span {
    font-size: 16px;
    font-weight: 400;
  }

  &:focus {
    border: 2px solid ${THEMES.Secondary};
    background-color: ${THEMES.Secondary};
    color: white;
  }

  &:hover {
    color: white;
    border: 2px solid ${THEMES.Secondary};
    background-color: ${THEMES.Secondary};
  }

  &:active {
    transform: scale(1.1);
  }

  &:disabled {
    color: white;
    border: 2px solid gainsboro;
    background-color: gainsboro;
    cursor: default;

    &:active {
      transform: scale(1);
    }
  }
`;

export default Button;
