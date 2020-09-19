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
        <ProfileContainer1>
          <Pic1 src={Profile} />
          <div>Thinh Nguyen</div>

          <div>Hi, I'm Thinh! I'm a Full Stack Web Developer.</div>
        </ProfileContainer1>
        <ProfileContainer2>
          <Pic2 src={Profile} />
          <div>Ivan Escalante</div>
          <div>Hi, I'm Ivan! I'm a Full Stack Web Developer.</div>
        </ProfileContainer2>

        <ProfileContainer3>
          <Pic3 src={Profile} />
          <div>Jenny Ma</div>
          <div>Hi, I'm Jenny! I'm a Full Stack Web Developer.</div>
        </ProfileContainer3>
        <ProfileContainer4>
          <Pic4 src={Profile} />
          <div>Ton Truong Dao</div>
          <div>Hi, I'm Truong! I'm a Full Stack Web Developer.</div>
        </ProfileContainer4>
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

const Pic1 = styled.img``;
const Pic2 = styled.img``;
const Pic3 = styled.img``;
const Pic4 = styled.img``;

const ProfileContainer1 = styled.div``;
const ProfileContainer2 = styled.div``;
const ProfileContainer3 = styled.div``;
const ProfileContainer4 = styled.div``;

export default About;
