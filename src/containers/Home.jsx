// React
import React from "react";

// node modules
import styled from "styled-components";

// components
import { ParallaxContainer } from "./components/Containers";

const Home = props => {
  return (
    <ParallaxContainer srcURL="images/self/cover.jpg">
      <TextContainer>
        <SiteTitle>Rahul Rangnekar</SiteTitle>
        <Roles>Software Developer & Writer</Roles>
      </TextContainer>
    </ParallaxContainer>
  );
};

const TextContainer = styled.div`
  color: #fff;
  position: absolute;
  left: 2rem;
  top: 15rem;
  text-align: center;
`;

const SiteTitle = styled.h1`
  font-size: 4rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  margin: 0;
  padding: 0.5rem 0;
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const Roles = styled.h2`
  font-size: 1.5rem;
  font-weight: 200;
  margin: 0;
  padding: 0.5rem;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export default Home;
