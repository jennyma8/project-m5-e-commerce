import React from "react";
import styled, { keyframes, css } from "styled-components";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets";
import { THEMES } from "../THEMES";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartDrawer } from "../../actions";

const Nav = (props) => {
  const dispatch = useDispatch();
  const TOTAL_QUANTITY = useSelector((state) => state.CART.totalQuantity);

  const [reduceNav, setReduceNav] = React.useState(false);
  function toggleReduce() {
    if (window.scrollY > 300) {
      setReduceNav(true);
    } else {
      setReduceNav(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener("scroll", toggleReduce);
  }, []);

  return (
    <>
      <Wrapper reduceNav={reduceNav}>
        <LogoSrc exact to="/">
          <img src={Logo} style={{ height: 70, width: 70 }} />
        </LogoSrc>
        <Title>earobology</Title>
        <NavList>
          <StyledLink exact to="/">
            <LinkName>Home</LinkName>
          </StyledLink>

          <StyledLink exact to="/items">
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

          <CartButton onClick={() => dispatch(toggleCartDrawer())}>
            <FiShoppingCart size={32} />
            {TOTAL_QUANTITY > 0 && <CartCount>{TOTAL_QUANTITY}</CartCount>}
          </CartButton>
        </NavList>
      </Wrapper>
      {props.children}
    </>
  );
};

const LogoSrc = styled(NavLink)`
  margin-left: 20px;
`;
const Title = styled.div`
  padding-top: 25px;
  font-weight: bold;
  margin-right: 100px;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
const LinkName = styled.span`
  text-decoration: none;
  font-size: 20px;
  padding: 5px;
  color: black;
  font-weight: bold;
  /* & span {
    padding: 5px;
  } */

  &:hover {
    color: #cfba4f;
    cursor: pointer;
    border-bottom: 2px solid grey;
  }
`;

const Decrease = keyframes`
0% {
  height: 120px;
}
100% {
  height: 80px;
}
`;

const Increase = keyframes`
0% {
  height: 80px;
}
100% {
  height: 120px;
}
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background: gray;
  text-decoration: none;
  transition: all 1s ease-in-out;
  ${(props) =>
    props.reduceNav
      ? css`
          animation: ${Decrease} 1.3s forwards;
        `
      : css`
          animation: ${Increase} 1.3s forwards;
        `}
  /* -moz-transition:all 1s ease-in-out;
-webkit-transition:all 1s ease-in-out;
-o-transition:all 1s ease-in-out; */
  &:hover {
    background: white;
  }
`;

const NavList = styled.li`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled.div`
  padding: 2px;
`;

const CartButton = styled.button`
  position: relative;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #cfba4f;
  }
`;

const CartCount = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  top: 0;
  right: 0;
  width: 18px;
  height: 18px;
  background: ${THEMES.Cart};
  border-radius: 100%;
  color: white;
`;

export default Nav;
