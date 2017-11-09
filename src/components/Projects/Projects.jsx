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
              <ProjectCard
                title={proj.title}
                link={proj.link}
                image={proj.image}
                text={proj.text}
                hoverStyle={proj.hoverStyle}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  projectsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const hoverStyles = StyleSheet.create({
  annot8Hover: {
    ':hover': {
      background: 'linear-gradient(#3F7BA9, #FFF)'
    }
  },
  spotifyHover: {
    ':hover': {
      background: 'linear-gradient(#1ED760, #FFF)'
    }
  },
  pseHover: {
    ':hover': {
      background: 'linear-gradient(#895FAD, #FFD700)'
    }
  },
  yelpHover: {
    ':hover': {
      background: 'linear-gradient(#D32323, #FFF)'
    }
  },
  productHover: {
    ':hover': {
      background: 'linear-gradient(#333, #FFF)'
    }
  },
  writingHover: {
    ':hover': {
      background: 'linear-gradient(#FFF, #000)'
    }
  }
});

const PROJECTS = [
  {
    title: 'Annot8',
    link: 'projects/annot8',
    image: 'images/projects/annot8.png',
    text:
      'A web application for students to ask questions on webcasted YouTube lecture videos.',
    hoverStyle: hoverStyles.annot8Hover
  },
  {
    title: 'Spotify Top 10',
    link: 'projects/spotify',
    image: 'images/projects/spotify.png',
    text:
      'A web application to track and visualize the top 10 songs worldwide.',
    hoverStyle: hoverStyles.spotifyHover
  },
  {
    title: 'Pi Sigma Epsilon',
    link: 'projects/pse',
    image: 'images/projects/pse.png',
    text: 'A website for my business fraternity.',
    hoverStyle: hoverStyles.pseHover
  },
  {
    title: 'The Yelp Elite Project',
    link: 'projects/yelp-dataset',
    image: 'images/projects/yelp.png',
    text:
      "A website created from Yelp's publicly availably dataset to determine what makes a Yelp user Elite.",
    hoverStyle: hoverStyles.yelpHover
  },
  {
    title: "Let's Talk Product",
    link: 'projects/product',
    image: 'images/projects/lets-talk-product.png',
    text: '',
    hoverStyle: hoverStyles.productHover
  },
  {
    title: 'Yelp Elite',
    link: 'projects/yelp-elite',
    image: 'images/projects/yelp.png',
    text: 'images/projects/yelp.png',
    hoverStyle: hoverStyles.yelpHover
  },
  {
    title: 'Writing',
    link: 'projects/writing',
    image: 'images/projects/writing.png',
    text: '',
    hoverStyle: hoverStyles.writingHover
  }
];
