import React from "react";
import styled from "styled-components";
import { THEMES } from "../THEMES";
import { Link } from "react-router-dom";

const ProductsHeader = (props) => {
  return (
    <Wrapper>
      <HeaderList>
        {props.data.map((cat) => {
          return (
            <Category key={cat}>
              <StyledLink to={`/items/category/${cat}`}>
                <span>{cat}</span>
              </StyledLink>
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
    max-height: 30vh;
    margin-top: 5px;
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
    max-height: 200px;
    margin: 0px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
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

  & ${StyledLink} {
    font-size: 22px;
  }

  &:hover {
    /* flex: 1; */
    background-color: ${THEMES.Primary};
    border: 2px solid ${THEMES.Primary};

    & ${StyledLink} {
      /* position: absolute; */
      color: white;
    }

    &:focus {
      outline: none;
      background-color: ${THEMES.Primary};
      color: white;
    }
  }

  @media (max-width: 768px) {
    margin: 5px;
    padding: 5px;
  }
`;

export default ProductsHeader;
