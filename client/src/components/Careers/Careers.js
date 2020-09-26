import React from "react";
import styled from "styled-components";
import { Meeting } from "../../assets";

import PageContainer from "../UI/PageContainer";

const Careers = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <PageContainer>
      <Wrapper>
        <Title>
          <div>Together at Wearobology, we...</div>
          <div>change Time...</div>
          <div>and make time for Change...</div>
        </Title>

        <p>
          "Olympic timing technology has come a long way in the last century.
          And thank goodness, as we've seen increasingly more races that have
          come down to not just the wire, but the itty-bitty strings that make
          up the wire. Take 2008, when swimmer Michael Phelps finished
          one-hundredth of a second before competitor Milorad Cavic. The digital
          evidence taken from a camera recording 100 frames a second was able to
          confirm that Phelps won the gold by that slimmest of margins."
        </p>

        <Banner>Join our Team</Banner>
        <Resume>
          <p>
            We are looking to grow our team with people who share our energy and
            enthusiasm for creating the best experience for our customers.
          </p>
          <p>Please send your resume to info@wearobology.com.</p>
        </Resume>
      </Wrapper>
    </PageContainer>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: 120px;

  margin: 50px;
  /* height: 750px; */
  & p {
    margin: 15px;
    font-style: italic;
  }

  @media (max-width: 768px) {
  }
`;

const Title = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Banner = styled.div`
  height: 350px;
  background-size: cover;
  background-image: url(${Meeting});
  font-size: 40px;
  color: black;
  padding: 10px;
  width: 100%;
`;

const Resume = styled.div`
  & p {
    font-style: normal;
  }
`;

export default Careers;
