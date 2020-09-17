import React from "react";
import styled from "styled-components";
import { FiChevronUp } from "react-icons/fi";
import { THEMES } from "../../THEMES";

const PageContainer = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  function toggleVisibility() {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  React.useEffect(() => {
    document.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <ScrollUpBtn onClick={scrollToTop}>
          <StyledArrow size={32} />
          <ScrollUpText>Back to top</ScrollUpText>
        </ScrollUpBtn>
      )}
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
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

const StyledArrow = styled(FiChevronUp)`
  color: white;
`;

const ScrollUpText = styled.span`
  display: none;
  font-size: 16px;
  color: white;
  font-weight: 600;
`;

const ScrollUpBtn = styled.button`
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
  /* transform: all ease-in-out 0.3s; */
  cursor: pointer;

  &:hover {
    position: sticky;
    border-radius: 50px 50px 50px 50px;
    width: 10em;
    & ${ScrollUpText} {
      display: inline-block;
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

export default PageContainer;
