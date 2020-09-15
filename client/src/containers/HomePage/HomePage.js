import React from "react";
import styled from "styled-components";
import PageContainer from "../../components/UI/PageContainer";
import { Player } from "video-react";

const HomePage = () => {
  return (
    <PageContainer>
      This is the Home Page
      <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </PageContainer>
  );
};

export default HomePage;
