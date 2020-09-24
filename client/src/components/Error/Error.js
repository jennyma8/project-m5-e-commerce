import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Space from "../../assets/Space.jpg";
import PageContainer from "../../components/UI/PageContainer";

const Error = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>404 - Page Not Found</Title>
        <Info>
          <p>Sorry...you won't find what you need here</p>
          <p>You could admire this beautiful space...or</p>
          <p>perhaps going back to our homepage will be more appropriate</p>
        </Info>
        <StyledLink to="/">Go back to homepage</StyledLink>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: 80px;
  background-size: cover;
  background-image: url(${Space});
  height: 130vh;
  margin-bottom: -25px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 100px;
`;

const Title = styled.h1`
  color: white;
  font-size: 3em;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    font-size: 1.2em;
    padding: 20px 0;
    color: white;
  }
`;

const StyledLink = styled(Link)`
  color: white;
`;

export default Error;
