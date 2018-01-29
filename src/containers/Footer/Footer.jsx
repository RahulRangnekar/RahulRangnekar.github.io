// React
import React from "react";

// node modules
import styled from "styled-components";
import SocialMediaBar from "react-social-media-bar";

// components
import { RowContainer } from "../components/Containers";
import { ExtLink } from "../components/Links";
import FOOTER_INFO from "./FooterInfo";

const Footer = props => {
  return (
    <FooterContainer>
      <p>Peace and Love</p>
      <SocialMediaBar
        icons={FOOTER_INFO}
        iconColor="#F5F5F5"
        iconSize="1rem"
        hoverColor="#2980B9"
        hoverOpacity={0.9}
        margin={{ top: "4px", right: "7.5px", bottom: "4px", left: "7.5px" }}
      />
      <SourceLink href="https://github.com/rahrang/rahrang" target="_blank">
        Source
      </SourceLink>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: #333;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  font-size: 0.875rem;
  padding: 0 0.5rem;

  p {
    grid-column: 1;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 0.5rem;
  }
`;

const SourceLink = ExtLink.extend`
  color: #fff;
  text-align: right;
  margin: 0.5rem 0;
`;
