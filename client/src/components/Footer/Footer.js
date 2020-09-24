import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Logo } from "../../assets";
import { THEMES } from "../THEMES";

const Footer = () => {
  return (
    <Wrapper>
      <TopRow>
        <Link to="/">Home</Link>
        <Link to="/items">Products</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/about">About Us</Link>
      </TopRow>
      <BottomRow>
        <Image src={Logo} alt="Logo" />
        <span>@ 2020 Wearabology All Rights Reserved</span>
      </BottomRow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: gray;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  min-height: 15vh;
  /* position: absolute; */
  width: 100%;

  margin-top: 25px;

  padding-right: 10vw;
  padding-left: 10vw;

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

const TopRow = styled.div`
  & a {
    padding: 0 10px;
    text-decoration: none;
    color: ${THEMES.Primary};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  & span {
    margin-top: 6px;
  }
`;

const Image = styled.img`
  margin-right: 20px;
  width: 35px;
`;

export default Footer;
