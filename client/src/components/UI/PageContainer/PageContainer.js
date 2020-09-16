import React from "react";
import styled from "styled-components";

const PageContainer = ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
<<<<<<< HEAD
=======
  /* border: 5px solid red; */
>>>>>>> parent/master
  position: relative;
  margin-top: 0px;
  margin-right: 10vw;
  margin-left: 10vw;
  background: black;

  /* this should be removed once we have content in each page */
  /* min-height: 100%; */
  min-height: 100vh;

<<<<<<< HEAD
  @media (max-width: 1440px) {
    margin-top: 0px;
    margin-right: 0px;
    margin-left: 0px;
=======
  @media (max-width: 1200px) {
    margin-top: 15px;
    margin-right: 10px;
    margin-left: 10px;
>>>>>>> parent/master
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
