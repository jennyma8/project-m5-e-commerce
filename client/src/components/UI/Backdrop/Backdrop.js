import React from "react";
import styled from "styled-components";

const Backdrop = (props) =>
  props.show ? (
    <BackdropContainer onClick={props.closeHandler}></BackdropContainer>
  ) : null;

const BackdropContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 800;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Backdrop;
