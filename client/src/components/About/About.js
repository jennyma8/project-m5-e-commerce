import React from "react";
import styled from "styled-components";
import { Ivan, Thinh, Truong, Jenny } from "../../assets";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

const About = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Wrapper>
      <Title>
        Meet Our <strong>Team</strong>
      </Title>
      <ProfileWrapper>
        <ProfileContainer>
          <Pic src={Thinh} style={{ width: 170, height: 200 }} />
          <div>Thinh Nguyen</div>
          <a href="https://github.com/g-thinh">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/gia-thinh-nguyen-552586197/">
            <AiFillLinkedin />
          </a>

          <a href="https://twitter.com/GThinhNguyen">
            <FiTwitter />
          </a>

          <p>
            Hi, I'm Thinh! My experience within a Workforce Management team has
            taught me the basics of making decisions to continually support my
            business' success. I am always motivated to learn new technologies.
            Currently learning full-stack web development at Concordia's
            Bootcamp program.
          </p>
        </ProfileContainer>
        <ProfileContainer>
          <Pic src={Ivan} style={{ width: 190, height: 200 }} />
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
            HTML, CSS, Javascript, Node and Express for backend, React and Redux
            for front end. I will further develop my knowledge by learning
            MongoDB in order to provide Database knowledge and become a
            full-stack web developer.
          </p>
        </ProfileContainer>
        <ProfileContainer>
          <Pic src={Jenny} style={{ width: 180, height: 200 }} />
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
            triggered my curiosity which is Coding. My endeavours are to make
            this world a more creative and efficient place.
          </p>
        </ProfileContainer>
        <ProfileContainer>
          <Pic src={Truong} style={{ width: 190, height: 200 }} />
          <div>Ton Truong Dao</div>
          <a href="https://github.com/tontruongdao">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com">
            <AiFillLinkedin />
          </a>
          <a href="https://twitter.com">
            <FiTwitter />
          </a>

          <p>Hi, I'm Truong! I'm a Full Stack Web Developer.</p>
        </ProfileContainer>
      </ProfileWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 90vh;
  margin: 150px 50px 0px 50px;
`;
const Title = styled.div`
  text-align: center;
  margin-bottom: 100px;
  font-size: 30px;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;

  @media (max-width: 1200px) {
    /* ... */
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Pic = styled.img`
  border-radius: 50%;
  box-shadow: 5px 5px 15px 5px #000000;
`;

const ProfileContainer = styled.div`
  height: 100%;
  width: 500px;
  & div {
    font-size: 20px;
  }
  & a {
    text-decoration: none;
    color: black;
    padding: 10px;
  }
  & p {
    /* display: none; */
    visibility: hidden;
  }
  &:hover p {
    /* display: block; */
    text-align: left;
    visibility: visible;
  }
  @media (max-width: 1024px) {
    width: 310px;
  }
`;

export default About;
