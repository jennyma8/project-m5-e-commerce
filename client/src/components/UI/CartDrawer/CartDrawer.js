import React from "react";
import styled, { keyframes, css } from "styled-components";
import Backdrop from "../Backdrop";

const CartDrawer = (props) => {
  const Wrapper = styled.div`
    /* display: ${props.show ? "block" : "hidden"}; */
    position: fixed;
    min-width: 40%;
    max-width: 70%;
    height: 100%;
    right: -100%;
    top: 0;
    z-index: 1000;
    background-color: white;
    /* border: 5px solid red; */
    box-shadow: 1px 1px 1px black;
    padding: 32px 16px;

    ${props.show
      ? css`
          animation: ${SlideOpen} 0.5s forwards;
        `
      : css`
          animation: ${SlideClose} 0.5s forwards;
        `}/* animation: ${props.show ? SlideOpen : SlideClose} 0.5s forwards; */
  `;

  return (
    <>
      <Backdrop show={props.show} closeHandler={props.close} />
      <Wrapper>{props.children}</Wrapper>
    </>
  );
};

const SlideOpen = keyframes`
100% {
  right:0;
}
`;

const SlideClose = keyframes`
0% {
  right:0;
  z-index: 0;
  visibility: hidden;
}
100% {
  right: -100%;
  z-index: 1000;
  visibility: default;
}
`;

export default CartDrawer;
