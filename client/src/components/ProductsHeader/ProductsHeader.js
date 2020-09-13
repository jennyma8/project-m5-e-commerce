import React from "react";
import styled from "styled-components";

const ProductsHeader = (props) => {
  return (
    <Wrapper>
      <HeaderList>
        {props.data.map((cat) => {
          return <li>{cat}</li>;
        })}
      </HeaderList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 50vh;
`;

const HeaderList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    flex: 1;
    text-align: center;
    font-size: 22px;
  }
`;

export default ProductsHeader;
