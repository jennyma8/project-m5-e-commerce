import React from "react";
import styled from "styled-components";

export const Sidebar = ({ children }) => (
  <Wrapper>
    <Filters>Sidebar Filters</Filters>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  /* height: 100%; */
  height: 50vh;

  @media (max-width: 800px) {
    display: flex;
    height: 50px;
    flex-flow: column nowrap;
  }
`;

const Filters = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 2px solid goldenrod;
`;
