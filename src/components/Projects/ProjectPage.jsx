// React
import React from 'react';

// NPM Modules
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
    let { src, alt, height, width } = bodyItem;
    return (
      <img
        className={css(styles.image)}
        src={src}
        alt={alt}
        height={height}
        width={width}
      />
    );
  };

  createProjectLink = link => {
    return (
      <a href={link} className={css(styles.link)} target="_blank">
        Go To Project
      </a>
    );
  };

  render() {
    let project = this.props.match.params.project_title;
    let projectInfo = PROJECT_INFO[project];

    if (_.isNull(project) || _.isEmpty(projectInfo)) {
      return null;
    }

    let projectLink = this.createProjectLink(projectInfo.linkToProject);

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
      <div className={css(generalStyles.columnContainer, generalStyles.fadeIn)}>
        <h2 className={css(generalStyles.header)}>{projectInfo.title}</h2>
        {projectLink}
        <div
          className={css(generalStyles.columnContainer, styles.bodyContainer)}
        >
          {body}
        </div>
        {projectLink}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  link: {
    color: '#333',
    border: '3px solid #333',
    borderRadius: '3px',
    margin: '5px 0',
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

  image: {
    border: '2px solid #2980B9'
  },

  bodyContainer: {
    width: '70%',
    '@media(max-width: 600px)': {
      width: '95%'
    },
    '@media(max-width: 900px)': {
      width: '80%'
    }
  }
});
