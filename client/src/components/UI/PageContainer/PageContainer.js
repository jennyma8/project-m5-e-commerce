import React from "react";
import styled from "styled-components";

const PageContainer = ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
  border: 5px solid red;
  position: relative;
  margin-top: 15px;
  margin-right: 50px;
  margin-left: 50px;

  /* this should be removed once we have content in each page */
  /* min-height: 100%; */
  min-height: 100vh;

  @media (max-width: 65rem) {
    margin-top: 15px;
    margin-right: 0px;
    margin-left: 0px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-flow: column wrap;
    background-color: pink;
    text-align: center;
  }
`;

export default PageContainer;
