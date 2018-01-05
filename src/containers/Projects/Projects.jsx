// React
import React from "react";

// components
import { RowContainer, ColumnContainer } from "../components/Containers";
import { PageHeader } from "../components/Headers";
import ProjectCard from "./ProjectCard.jsx";
import PROJECTS from "./Project_Info/info.js";

const Projects = props => {
  return (
    <ProjectContainer>
      <PageHeader>What I Do</PageHeader>
      <RowContainer>
        {Object.values(PROJECTS).map(project => {
          return <ProjectCard {...project} />;
        })}
      </RowContainer>
    </ProjectContainer>
  );
};

export default Projects;

const ProjectContainer = ColumnContainer.extend`
  padding: 0 0 1.25rem;
`;
