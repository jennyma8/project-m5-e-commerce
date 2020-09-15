import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets";
import { THEMES } from "../THEMES";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Nav = ({ children }) => {
  return (
    <>
      <Wrapper>
        <LogoSrc exact to="/">
          <img src={Logo} style={{ height: 70, width: 70 }}></img>
        </LogoSrc>
        <NavList>
          <StyledLink exact to="/">
            <LinkName>Home</LinkName>
          </StyledLink>

          <StyledLink exact to="/products">
            <LinkName>Products</LinkName>
          </StyledLink>

          <StyledLink exact to="/careers">
            <LinkName>Careers</LinkName>
          </StyledLink>

          <StyledLink exact to="/about">
            <LinkName>About Us</LinkName>
          </StyledLink>
          <StyledLink exact to="/search">
            <LinkName>
              <FiSearch />
              <span>Search</span>
            </LinkName>
          </StyledLink>
          <StyledLink exact to="/cart">
            <LinkName>
              <FiShoppingCart />
              <span>Cart</span>
            </LinkName>
          </StyledLink>
        </NavList>
      </Wrapper>
      {children}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;

  background: grey;
  text-decoration: none;
  transition:all 1s ease-in-out
    -moz-transition:all 1s ease-in-out;
    -webkit-transition:all 1s ease-in-out;
    -o-transition:all 1s ease-in-out;
  &:hover {
    background: white;
  }
`;

const LogoSrc = styled(NavLink)`
  margin-left: 20px;
  margin-right: 200px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
const LinkName = styled.span`
  text-decoration: none;
  font-size: 20px;
  padding: 5px;
  font: black;
  font-weight: bold;
  & span {
    padding: 5px;
  }

  &:hover {
    color: #cfba4f;
    cursor: pointer;
    border-bottom: 2px solid grey;
  }
`;

const NavList = styled.li`
  display: flex;
  flex: 1;
  justify-content: space-around;
`;

const Icon = styled.div`
  padding: 2px;
`;
export default Nav;
