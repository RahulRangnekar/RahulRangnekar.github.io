// React
import React from "react";

// node modules
import styled from "styled-components";

// components
import { ParallaxContainer } from "./components/Containers";

const Home = props => {
  return (
    <GridContainer>
      <TopContainer srcURL="images/self/cover.jpg">
        <TextContainer>
          <SiteTitle>Rahul Rangnekar</SiteTitle>
          <Roles>Software Developer && Writer</Roles>
        </TextContainer>
      </TopContainer>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
`;

const TopContainer = ParallaxContainer.extend`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 1 / -1;
  align-content: center;
`;

const TextContainer = styled.div`
  color: #fff;
  text-align: center;
  grid-column: 1;

  @media (max-width: 600px) {
    h1 {
      font-size: 3rem;
      padding: 0 1rem;
    }
  }
`;

const SiteTitle = styled.h1`
  font-size: 4rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  margin: 0;
  padding: 0.5rem 0;
`;

const Roles = styled.h2`
  font-size: 1.5rem;
  font-weight: 200;
  margin: 0;
  padding: 0.5rem;
`;

export default Home;
