// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import { getRouteProps } from 'react-static';

// Local Components
import ProjectCard from './ProjectCard.jsx';

// Stylesheets
import { generalStyles } from '../../stylesheets/general_stylesheet.js';

const Projects = props => {
  console.log(props)
  return null;
  // return (
  //   <div
  //     className={css(
  //       generalStyles.columnContainer,
  //       generalStyles.fadeIn,
  //       styles.projectContainer
  //     )}
  //   >
  //     <h2 className={css(generalStyles.header)}>What I Do</h2>
  //     <div
  //       className={css(
  //         generalStyles.columnContainer,
  //         styles.projectCardsContainer
  //       )}
  //     >
  //       {PROJECTS.map(proj => {
  //         return <ProjectCard project={proj} />;
  //       })}
  //     </div>
  //   </div>
  // );
};

export default Projects;

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
