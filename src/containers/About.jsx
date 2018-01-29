// React
import React from "react";

// node modules
import styled from "styled-components";

// components
import { ColumnContainer, RowContainer } from "./components/Containers";
import { PageHeader } from "./components/Headers";
import { Paragraph } from "./components/Texts";
import { Image } from "./components/Images";

const About = props => {
  return (
    <GridContainer>
      <Header>Who I Am</Header>
      <AboutImage
        src="/images/self/rahul-1.jpg"
        alt="Me"
        round
        height="400px"
        width="400px"
      />
      <TextContainer>
        <ParaSpan>
          <span>Hello! </span>
          I'm Rahul, a senior at UC Berkeley.
        </ParaSpan>
        <ParaSpan>
          I tend to spend my time
          <span> creating </span>
          - websites, articles, products, food - and I love every second of it!
        </ParaSpan>
        <ParaSpan>
          <span>Capabilities</span>
          <br />
          - Studies Computer Science and Economics <br />
          - Walks anywhere and everywhere within a 2 mile radius <br />
          - Eats anything pescatarian thanks to a bottomless stomach <br />
          - Raps anything from Childish Gambino to Hamilton on command
        </ParaSpan>
        <ParaSpan>
          <span>Whereabouts</span>
          <br />
          - Berkeley campus: searching for hidden areas and secrets <br />
          - Sacks Coffee: filling up on my weekly caffeine and studying
          <br />
          - My Kitchen: prepping meals for the week or baking goodies <br />
          - Memorial Stadium Gym: getting swole every day before class
        </ParaSpan>
        <ParaSpan>
          <span>Quirks</span>
          <br />
          - Strategizes how to climb every statue he sees <br />
          - Takes pictures of food before eating - "it's for the Yelp"
          <br />
          - Considers Medium and Quora his favorite social media <br />
          - Feeds off the energy of ideas to make the world a better place
        </ParaSpan>
      </TextContainer>
    </GridContainer>
  );
};

export default About;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
`;

const Header = PageHeader.extend`
  grid-column: 1 / -1;
`;

const AboutImage = Image.extend`
  grid-column: 1;
  grid-row: 2;
  @media (max-width: 600px) : {
    width: 300px;
    height: 300px;
  }
`;

const TextContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

const ParaSpan = Paragraph.extend`
  span {
    color: #2980b9;
    font-weight: bold;
    letter-spacing: 0.035rem;
  }
`;
