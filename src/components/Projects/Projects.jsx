// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';

// Stylesheets
import { generalStyles } from '../../stylesheets/general_stylesheet.js';

export default class Projects extends React.Component {
  render() {
    return (
      <div className={css(generalStyles.columnContainer, generalStyles.fadeIn)}>
        <h2 className={css(generalStyles.header)}>My Work</h2>
        <div
          className={css(
            generalStyles.columnContainer,
            styles.projectsContainer
          )}
        >
          {PROJECTS.map(proj => {
            return (
              <div>
                <p>{proj.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({});

const PROJECTS = [
  {
    title: 'Annot8',
    icon: '',
    text: ''
  },
  {
    title: "Let's Talk Product",
    icon: '',
    text: ''
  },
  {
    title: 'Spotify Top 10',
    icon: '',
    text: ''
  },
  {
    title: 'Yelp Elite',
    icon: '',
    text: ''
  },
  {
    title: 'The Yelp Elite Project',
    icon: '',
    text: ''
  },
  {
    title: 'Berkeley Pi Sigma Epsilon',
    icon: '',
    text: ''
  },
  {
    title: 'Writer',
    icon: '',
    text: ''
  }
];
