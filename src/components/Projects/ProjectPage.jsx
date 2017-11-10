// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';

// Local Components
import { PROJECT_INFO } from './ProjectInfo.js';

// Stylesheets
import { generalStyles } from '../../stylesheets/general_stylesheet.js';

export default class ProjectPage extends React.Component {
  createParagraph = bodyItem => {
    let { text } = bodyItem;
    return <p className={css(styles.text)}>{text}</p>;
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

  render() {
    let project = this.props.match.params.project_title;
    let projectInfo = PROJECT_INFO[project];

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
        <div className={css(generalStyles.columnContainer)}>{body}</div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  text: {}
});
