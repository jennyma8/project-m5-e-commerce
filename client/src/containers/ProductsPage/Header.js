import React from "react";
import styled from "styled-components";

export const Header = () => (
  <Wrapper>
    <Title>This is the Products Page Header</Title>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed red;
  width: 100%;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 2rem;
`;
