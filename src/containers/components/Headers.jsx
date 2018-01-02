import styled from "styled-components";

const PageHeader = styled.h2`
  border-bottom: 3px solid #2980b9;
  color: ${props => (props.alt ? "#FFF" : "#333")};
  font-size: 1.8rem;
  letter-spacing: 0.025rem;
  padding: 0.25rem 1.35rem;
  text-transform: uppercase;
`;

const SectionHeader = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  margin: 0.375px 0;
  padding: 0;
`;

const SubSectionHeader = styled.h4`
  color: #fff;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  margin: 0.375rem 0;
  padding: 0;
`;

const ProjectPageHeader = PageHeader.extend`
  padding: 0.25rem 0;
`;

export { PageHeader, SectionHeader, SubSectionHeader, ProjectPageHeader };
