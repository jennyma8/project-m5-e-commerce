import React from "react";
import styled, { keyframes } from "styled-components";

import { FiChevronUp } from "react-icons/fi";
import { THEMES } from "../../THEMES";

const ScrollUpButton = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <ScrollUpBtn onClick={scrollToTop}>
      <StyledArrow size={32} />
      <ScrollUpText>Back to top</ScrollUpText>
    </ScrollUpBtn>
  );
};

const StyledArrow = styled(FiChevronUp)`
  color: white;
`;

const ScrollUpText = styled.p`
  display: none;
  font-size: 16px;
  color: white;
  font-weight: 600;
`;

const OpenText = keyframes`
  100% {
    width: 10em;
  }
`;

const FadeIn = keyframes`
  0% {
    opacity:0;
  }
  100%{
    opacity: 1;
  }
`;

const FadeInText = keyframes`
  0% {
    opacity:0;
  }
  100%{
    opacity: 1;
  }
`;

const ScrollUpBtn = styled.button`
  /* visibility: ${(props) => (props.show ? "visible" : "hidden")}; */
  position: sticky;
  z-index: 500;
  top: 90vh;
  left: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px 50px 50px 50px;
  border: 1px solid ${THEMES.Primary};
  outline: none;
  background-color: ${THEMES.Primary};
  width: 50px;
  height: 50px;
  transition: 0.2s;
  animation: ${FadeIn} 0.3s forwards;
  /* transform: all ease-in-out 0.3s; */
  cursor: pointer;

  &:hover {
    position: sticky;
    border-radius: 50px 50px 50px 50px;
    /* width: 10em; */
    animation: ${OpenText} 0.2s forwards;
    /* & ${ScrollUpText} {
      display: inline-block;
    } */

    &:hover ${ScrollUpText} {
      display: block;
      transition: all 0.5s ease-in;
      animation: ${FadeInText} 1.5s forwards;
    }

    @media (max-width: 1200px) {
      &:hover {
        position: sticky;
        border-radius: 50px 50px 50px 50px;
        width: auto;
      }
      & ${ScrollUpText} {
        display: none;
      }
    }
  }

  @media (max-width: 1200px) {
    /*  */
  }

  @media (max-width: 1024px) {
    /*  */
  }
  @media (max-width: 768px) {
    top: 90vh;
    left: 6%;
  }
`;

export default ScrollUpButton;
