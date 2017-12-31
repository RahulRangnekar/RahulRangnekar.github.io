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
        iconColor={"#F5F5F5"}
        iconSize={"1rem"}
        hoverColor={"#2980B9"}
        hoverOpacity={0.9}
        margin={{ top: "0px", right: "7.5px", bottom: "0px", left: "7.5px" }}
      />
      <SourceLink href={"https://github.com/rahrang/rahrang"} target="_blank">
        Source
      </SourceLink>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = RowContainer.extend`
  background-color: #333;
  color: #fff;
  font-size: 0.875rem;
  justify-content: space-between;
  padding: 0.125rem 1rem;
  text-align: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const SourceLink = ExtLink.extend`
  color: #fff;
`;
