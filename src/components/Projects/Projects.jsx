// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';

// Local Components
import ProjectCard from './ProjectCard.jsx';

// Stylesheets
import { generalStyles } from '../../stylesheets/general_stylesheet.js';

export default class Projects extends React.Component {
  render() {
    return (
      <div
        className={css(
          generalStyles.columnContainer,
          generalStyles.fadeIn,
          styles.projectContainer
        )}
      >
        <h2 className={css(generalStyles.header)}>My Work</h2>
        <div
          className={css(
            generalStyles.columnContainer,
            styles.projectCardsContainer
          )}
        >
          {PROJECTS.map(proj => {
            return <ProjectCard project={proj} />;
          })}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  projectContainer: {
    padding: '0 0 20px'
  },

  projectCardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const PROJECTS = [
  {
    title: 'Annot8',
    subtitle: 'a web application',
    link: 'projects/annot8',
    image: 'images/projects/annot8.png',
    text:
      'A platform for students to ask questions on webcasted YouTube lecture videos.'
  },
  {
    title: 'Top 10',
    subtitle: 'a web application',
    link: 'projects/spotify',
    image: 'images/projects/spotify.png',
    text:
      'A weekly-updated tracker and visualizer for the top 10 songs worldwide.'
  },
  {
    title: 'Pi Sigma Epsilon',
    subtitle: 'a website',
    link: 'projects/pse',
    image: 'images/projects/pse.png',
    text: 'An 11-page website for my business fraternity.'
  },
  {
    title: 'The Elite Project',
    subtitle: 'a website',
    link: 'projects/yelp-dataset',
    image: 'images/projects/yelp.png',
    text:
      "A website created from Yelp's public dataset to determine what makes a Yelp user Elite."
  },
  {
    title: "Let's Talk Product",
    subtitle: 'a blog',
    link: 'projects/product',
    image: 'images/projects/lets-talk-product.png',
    text:
      'A blog about new products and features -- how are they designed, developed, and marketed? What needs improvement?'
  },
  {
    title: 'Yelp Elite',
    subtitle: 'a blog',
    link: 'projects/yelp-elite',
    image: 'images/projects/yelp.png',
    text: 'Restaurant reviews in my personal quest to eat everywhere I can.'
  },
  {
    title: 'Writing',
    subtitle: 'a lifelong journey',
    link: 'projects/writing',
    image: 'images/projects/writing.png',
    text: 'A way to express myself and give back'
  }
];
