import React from "react";
import styled from "styled-components";

const PageContainer = ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
  /* border: 5px solid red; */
  position: relative;
  margin-top: 15px;
  margin-right: 10vw;
  margin-left: 10vw;

  /* this should be removed once we have content in each page */
  /* min-height: 100%; */
  min-height: 100vh;

  @media (max-width: 1200px) {
    margin-top: 15px;
    margin-right: 10px;
    margin-left: 10px;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-flow: column wrap;
    /* background-color: pink; */
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export default PageContainer;
