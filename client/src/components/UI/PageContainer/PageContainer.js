import React from "react";
import styled from "styled-components";
import ScrollUpButton from "../ScrollUpButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleScrollUpButton } from "../../../actions";

const PageContainer = ({ children }) => {
  const dispatch = useDispatch();

  const ToggleScrollButton = useSelector(
    (state) => state.TOGGLERS.ScrollButton
  );

  function toggleVisibility() {
    if (window.scrollY > 700) {
      dispatch(toggleScrollUpButton(true));
    } else {
      dispatch(toggleScrollUpButton(false));
    }
  }

  React.useEffect(() => {
    document.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Wrapper>
      {ToggleScrollButton && <ScrollUpButton />}
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: 120px;
`;

const Container = styled.div`
  /* border: 5px solid red; */
  position: relative;
  margin-top: 0px;
  padding-right: 10vw;
  padding-left: 10vw;
  /* background: black; */

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
