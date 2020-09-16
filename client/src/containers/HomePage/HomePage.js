import React from "react";
import styled from "styled-components";
import PageContainer from "../../components/UI/PageContainer";
import { Video } from "../../assets";

const HomePage = () => {
  return (
    <PageContainer>
      <VideoContainer>
        <VideoSrc loop autoPlay>
          <source src={Video} type="video/mp4" />
        </VideoSrc>
      </VideoContainer>
    </PageContainer>
  );
};
const VideoContainer = styled.div`
  background: black;
`;
const VideoSrc = styled.video`
  width: 100%;
`;

export default HomePage;
