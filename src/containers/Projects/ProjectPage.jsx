// React
import React from 'react';

// node modules
import { isUndefined, isEmpty, includes } from 'lodash';

// components
import { PROJECT_INFO } from './ProjectInfo.js';
import { ColumnContainer, RowContainer } from '../components/Containers';
import { PageHeader } from '../components/Headers';
import { Paragraph, TaglineParagraph } from '../components/Texts';
import { IntButtonLink, ExtButtonLink } from '../components/Links';
import ImageWithCaption from '../components/ImageWithCaption';

export default class ProjectPage extends React.Component {
  componentDidMount() {
    let project = this.props.match.params.project_title;
    let all_projects = Object.keys(PROJECT_INFO);
    if (!includes(all_projects, project)) {
      this.props.history.replace('/projects');
    }
  }

  createParagraph = bodyItem => {
    let { text, taglineStyle } = bodyItem;
    return taglineStyle ? (
      <TaglineParagraph>{text}</TaglineParagraph>
    ) : (
      <Paragraph>{text}</Paragraph>
    );
  };

  createImage = bodyItem => {
    return <ImageWithCaption {...bodyItem} />;
  };

  createExternalLink = (link, text) => {
    if (isUndefined(link) || isEmpty(link)) {
      return null;
    }
    return (
      <ExtButtonLink fontSize={'1rem'} href={link} target="_blank">
        {text}
      </ExtButtonLink>
    );
  };

  createInternalLink = (link, text) => {
    return <IntButtonLink to={link}>{text}</IntButtonLink>;
  };

  render() {
    let project = this.props.match.params.project_title;
    let projectInfo = PROJECT_INFO[project];

    if (isUndefined(project) || isUndefined(projectInfo)) {
      return null;
    }

    let projectLink = this.createExternalLink(
      projectInfo.linkToProject,
      'Go To Project'
    );
    let repositoryLink = this.createExternalLink(
      projectInfo.linkToRepository,
      'GitHub Repository'
    );
    let backLink = this.createInternalLink('/projects', 'Back to All');

    let body = projectInfo.body.map(bodyItem => {
      switch (bodyItem.type) {
        case 'paragraph':
          return this.createParagraph(bodyItem);
        case 'image':
          return this.createImage(bodyItem);
        default:
          return null;
      }
    });

    return (
      <PageContainer>
        <PageHeader>{projectInfo.title}</PageHeader>
        {projectLink}
        <BodyContainer>{body}</BodyContainer>
        <RowContainer>
          {backLink}
          {projectLink}
          {repositoryLink}
        </RowContainer>
      </PageContainer>
    );
  }
}

const PageContainer = ColumnContainer.extend`
  padding: 0 0 2.5rem;
`;

const BodyContainer = ColumnContainer.extend`
  width: 70%;
  padding: 0 0 1.25rem;
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 95%;
  }
`;
