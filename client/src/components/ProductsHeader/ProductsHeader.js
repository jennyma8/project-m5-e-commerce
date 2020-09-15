import React from "react";
import styled from "styled-components";
import { THEMES } from "../THEMES";

const ProductsHeader = (props) => {
  console.log(props.data);
  return (
    <Wrapper>
      <HeaderList>
        {props.data.map((cat) => {
          return (
            <Category key={cat}>
              <span>{cat}</span>
            </Category>
          );
        })}
      </HeaderList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 30vh;
  margin-bottom: 5vh;
  margin-top: 5vh;

  @media (max-width: 1200px) {
    /* ... */
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    height: 20vh;
  }
`;

const HeaderList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;

  @media (max-width: 1200px) {
    /* ... */
  }

  @media (max-width: 1024px) {
    /* width: 100%; */
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Category = styled.button`
  /* flex: 1; */
  text-align: center;
  font-size: 1rem;
  padding: 12px;
  width: 200px;
  height: auto;
  border-radius: 12px;
  margin: 0 10px;
  cursor: pointer;
  border: 2px solid ${THEMES.Primary};

  background-color: white;
  color: ${THEMES.Primary};
  outline: none;
  transition: all ease-in 0.3s;
  /* border-radius: 20px; */

  & span {
    font-size: 22px;
  }

  &:hover {
    /* flex: 1; */
    background-color: ${THEMES.Primary};
    border: 2px solid ${THEMES.Primary};

    & span {
      /* position: absolute; */
      color: white;
    }

    &:focus {
      outline: none;
      background-color: ${THEMES.Primary};
      color: white;
    }
  }
`;

export default ProductsHeader;
