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
          <Pic>
            <img src={Profile} />

            <img src={Profile} />
            <img src={Profile} />
            <img src={Profile} />
          </Pic>
          <Name>
            <h1>Thinh Nguyen</h1>
            <div>Ivan Escalante</div>
            <div>Jenny Ma</div>
            <div>Ton Truong Dao</div>
          </Name>
        </ProfileContainer>

        <Description>
          <div>Hi, I'm Thinh! I'm a Full Stack Web Developer.</div>
          <div>Hi, I'm Ivan! I'm a Full Stack Web Developer.</div>
          <div>Hi, I'm Jenny! I'm a Full Stack Web Developer.</div>
          <div>Hi, I'm Truong! I'm a Full Stack Web Developer.</div>
        </Description>
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
`;

const Name = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Description = styled.div``;

const ProfileContainer = styled.div``;
export default About;
