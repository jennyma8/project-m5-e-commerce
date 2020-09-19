import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Profile } from "../../assets";

const About = () => {
  return (
    <>
      <Wrapper>
        <Title>
          Meet Our <strong>Team</strong>
        </Title>
        <ProfileContainer>
          <Name>
            <div>Thinh Nguyen</div>
            <div>Ivan Escalante</div>
            <div>Jenny Ma</div>
            <div>Ton Truong Dao</div>
          </Name>
          <Pic>
            <Pic1 src={Profile} />

            <Pic2 src={Profile} />
            <Pic3 src={Profile} />
            <Pic4 src={Profile} />
          </Pic>
          <Description>
            <Desc1 className="Thinh">
              Hi, I'm Thinh! I'm a Full Stack Web Developer.
            </Desc1>
            <h2>Hi, I'm Ivan! I'm a Full Stack Web Developer.</h2>
            <h3>Hi, I'm Jenny! I'm a Full Stack Web Developer.</h3>
            <h4>Hi, I'm Truong! I'm a Full Stack Web Developer.</h4>
          </Description>
        </ProfileContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 10px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 30px;
  margin: 50px;
`;

const Pic = styled.div`
  display: flex;
  justify-content: space-around;
  & .Pic1:hover .Thinh {
    display: block;
  }
`;

const Pic1 = styled.img`
  &:hover .Thinh {
    display: block;
  }
`;
const Pic2 = styled.img``;
const Pic3 = styled.img``;
const Pic4 = styled.img``;

const Name = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Description = styled.div``;

const ProfileContainer = styled.div``;

const Desc1 = styled.div`
  display: none;
`;

export default About;
