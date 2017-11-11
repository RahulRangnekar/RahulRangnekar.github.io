// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';

// Local Components
import { PROJECT_INFO } from './ProjectInfo.js';

// Stylesheets
import { generalStyles } from '../../stylesheets/general_stylesheet.js';

export default class ProjectPage extends React.Component {
  createParagraph = bodyItem => {
    let { text, taglineStyle } = bodyItem;
    return (
      <p className={css(styles.text, taglineStyle && styles.tagline)}>{text}</p>
    );
  };

  createImage = bodyItem => {
    let { src, alt, caption, height, width } = bodyItem;
    return (
      <div
        className={css(generalStyles.columnContainer, styles.imageContainer)}
      >
        <img
          className={css(styles.image)}
          src={src}
          alt={alt}
          height={height}
          width={width}
        />
        <p className={css(styles.imageCaption)}>{caption}</p>
      </div>
    );
  };

  createExternalLink = (link, text) => {
    console.log(link);
    if (_.isUndefined(link) || _.isEmpty(link)) {
      return null;
    }
    return (
      <a href={link} className={css(styles.link)} target="_blank">
        {text}
      </a>
    );
  };

  createInternalLink = (link, text) => {
    return (
      <Link to={link} className={css(styles.link)}>
        {text}
      </Link>
    );
  };

  render() {
    let project = this.props.match.params.project_title;
    let projectInfo = PROJECT_INFO[project];

    if (_.isUndefined(project) || _.isUndefined(projectInfo)) {
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
      <div
        className={css(
          generalStyles.columnContainer,
          generalStyles.fadeIn,
          styles.pageContainer
        )}
      >
        <h2 className={css(generalStyles.header)}>{projectInfo.title}</h2>
        {projectLink}
        <div
          className={css(generalStyles.columnContainer, styles.bodyContainer)}
        >
          {body}
        </div>
        <div id="link-container" className={css(generalStyles.rowContainer)}>
          <div id="back-link-container">{backLink}</div>
          <div id="project-link-container">{projectLink}</div>
          <div id="repository-link-container">{repositoryLink}</div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    padding: '0 0 40px'
  },

  link: {
    color: '#333',
    border: '3px solid #333',
    borderRadius: '3px',
    margin: '5px 10px',
    padding: '5px 10px',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: '#333',
      color: '#FFF'
    }
  },

  text: {
    color: '#333',
    fontSize: '1.125em',
    lineHeight: '1.25em'
  },

  tagline: {
    fontWeight: 'bold'
  },

  imageContainer: {
    margin: '10px 0',
    maxWidth: '100%'
  },

  image: {
    border: '2px solid #2980B9'
  },

  imageCaption: {
    fontSize: '0.875em',
    color: '#333',
    margin: '2px 0'
  },

  bodyContainer: {
    width: '70%',
    padding: '0 0 20px',
    '@media(max-width: 600px)': {
      width: '95%'
    },
    '@media(max-width: 900px)': {
      width: '80%'
    }
  }
});
