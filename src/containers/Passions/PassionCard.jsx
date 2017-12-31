// React
import React from "react";

// NPM Modules
import styled from "styled-components";

// components
import { RowContainer } from "../components/Containers";

const PassionCard = props => {
  let { icon, passion, text } = props;
  return (
    <CardContainer>
      <Icon className={`fa fa-${icon}`} aria-hidden="true" />
      <TextContainer>
        <PassionTitle>{passion}</PassionTitle>
        <PassionText>{text}</PassionText>
      </TextContainer>
    </CardContainer>
  );
};

export default PassionCard;

const CardContainer = RowContainer.extend`
  margin: 1rem 0.625rem;
  max-width: 450px;
`;

const Icon = styled.i`
  color: #333;
  margin: 0 1rem;
  width: 100px;

  &::before {
    font-size: 1.75rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const PassionTitle = styled.p`
  color: #2980b9;
  font-size: 1.1rem;
  letter-spacing: 0.05rem;
  margin: 0.25rem 0;
  text-transform: uppercase;
`;

const PassionText = styled.p`
  font-size: 1rem;
  margin: 0.25rem 0;
  letter-spacing: 0.05rem;
`;
