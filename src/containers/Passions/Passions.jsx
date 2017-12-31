// React
import React from "react";

// components
import { ColumnContainer, RowContainer } from "../components/Containers";
import { PageHeader } from "../components/Headers";
import PassionCard from "./PassionCard";
import { PASSIONS } from "./PassionInfo";

const Passions = props => {
  return (
    <PassionsContainer>
      <PageHeader>What I Love To Do</PageHeader>
      <PassionsCardContainer>
        {PASSIONS.map(p => {
          return <PassionCard key={p.passion} {...p} />;
        })}
      </PassionsCardContainer>
    </PassionsContainer>
  );
};

export default Passions;

const PassionsContainer = ColumnContainer.extend`
  min-height: calc(100vh - 108px);
`;

const PassionsCardContainer = RowContainer.extend`
  align-items: baseline;
  margin: auto;
  max-width: 1000px;
`;
