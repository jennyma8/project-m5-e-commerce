import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Ivan, Thinh, Truong, Jenny } from "../../assets";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <>
      <Wrapper>
        <Title>
          Meet Our <strong>Team</strong>
        </Title>
        <ProfileWrapper>
          <ProfileContainer1>
            <Pic1 src={Thinh} style={{ width: 270, height: 300 }} />
            <div>Thinh Nguyen</div>
            <a href="https://github.com/g-thinh">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/gia-thinh-nguyen-552586197/">
              <AiFillLinkedin />
            </a>

            <a href="https://twitter.com">
              <FiTwitter />
            </a>

            <p>
              Hi, I'm Thinh! My experience within a Workforce Management team
              has taught me the basics of making decisions to continually
              support my business' success. I am always motivated to learn new
              technologies. Currently learning full-stack web development at
              Concordia's Bootcamp program.
            </p>
          </ProfileContainer1>
          <ProfileContainer2>
            <Pic2 src={Ivan} style={{ width: 290, height: 300 }} />
            <div>Ivan Escalante</div>
            <a href="https://github.com/iescalante">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/ivan-enrique-escalante-cornejo/">
              <AiFillLinkedin />
            </a>
            <a href="https://twitter.com/IvanEnriqueEC">
              <FiTwitter />
            </a>

            <p>
              Hi, I'm Ivan! I am currently studying Full-stack Web Development (
              will graduate in November 2020) in order to build the necessary
              skills to build tools and projects that enhance the way we use
              software to conduct business and/or for other purposes (i.e.
              entertainment). My knowledge of modern web development includes
              HTML, CSS, Javascript, Node and Express for backend, React and
              Redux for front end. I will further develop my knowledge by
              learning MongoDB in order to provide Database knowledge and become
              a full-stack web developer.
            </p>
          </ProfileContainer2>
          <ProfileContainer3>
            <Pic3 src={Jenny} style={{ width: 270, height: 300 }} />
            <div>Jenny Ma</div>
            <a href="https://github.com/jennyma8">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/jenny-ma-70636576/">
              <AiFillLinkedin />
            </a>
            <a href="https://twitter.com/JennyMaMTL">
              <FiTwitter />
            </a>

            <p>
              Hi, I'm Jenny! I'm currently studying the Concordia Full Stack Web
              Developer Bootcamp. Having 10 years of experience in Finance, I
              choose to explore a complete different world that has always
              triggered my curiosity which is Coding. Hope to make this world a
              more creative and efficient place.
            </p>
          </ProfileContainer3>
          <ProfileContainer4>
            <Pic4 src={Truong} style={{ width: 270, height: 300 }} />
            <div>Ton Truong Dao</div>
            <a href="https://github.com/tontruongdao">
              <FiGithub />
            </a>
            <a>
              <AiFillLinkedin />
            </a>
            <a href="https://twitter.com">
              <FiTwitter />
            </a>

            <p>Hi, I'm Truong! I'm a Full Stack Web Developer.</p>
          </ProfileContainer4>
        </ProfileWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  top: 200px;
  width: 100%;
  margin: 50px;
`;
const Title = styled.div`
  text-align: center;
  margin-bottom: 100px;
  font-size: 30px;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
const Pic1 = styled.img`
  border-radius: 50%;
`;
const Pic2 = styled.img`
  border-radius: 50%;
`;
const Pic3 = styled.img`
  border-radius: 50%;
`;
const Pic4 = styled.img`
  border-radius: 50%;
`;

const ProfileContainer1 = styled.div`
  width: 500px;
  & a {
    text-decoration: none;
    color: black;
    padding: 10px;
  }
  & p {
    display: none;
  }
  &:hover p {
    display: block;
    text-align: left;
  }
`;
const ProfileContainer2 = styled.div`
  width: 500px;
  & a {
    text-decoration: none;
    color: black;
    padding: 10px;
  }
  & p {
    display: none;
  }
  &:hover p {
    display: block;
    text-align: left;
  }
`;
const ProfileContainer3 = styled.div`
  width: 500px;
  & a {
    text-decoration: none;
    color: black;
    padding: 10px;
  }
  & p {
    display: none;
  }
  &:hover p {
    display: block;
    text-align: left;
  }
`;
const ProfileContainer4 = styled.div`
  width: 500px;
  & a {
    text-decoration: none;
    color: black;
    padding: 10px;
  }
  & p {
    display: none;
  }
  &:hover p {
    display: block;
    text-align: left;
  }
`;

export default About;
