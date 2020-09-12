import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets";
import { THEMES } from "../THEMES";

const Nav = ({ children }) => {
  return (
    <>
      <img src={Logo} style={{ height: 60, width: 60 }} />

      <StyledLink exact to="/" activeStyle={{ color: THEMES.primary }}>
        <LinkName>Home</LinkName>
      </StyledLink>

      <StyledLink exact to="/products" activeStyle={{ color: THEMES.primary }}>
        <LinkName>Products</LinkName>
      </StyledLink>

      <StyledLink exact to="/careers" activeStyle={{ color: THEMES.primary }}>
        <LinkName>Careers</LinkName>
      </StyledLink>

      <StyledLink exact to="/about" activeStyle={{ color: THEMES.primary }}>
        <LinkName>About Us</LinkName>
      </StyledLink>
      {children}
    </>
  );
};

const StyledLink = styled(NavLink)``;
const LinkName = styled.span``;

export default Nav;
