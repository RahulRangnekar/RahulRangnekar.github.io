// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

export default class Projects extends React.Component {
  render() {
    return <div className={css(styles.container, styles.fadeIn)} />;
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  header: {
    color: '#333',
    fontSize: '1.875em',
    borderBottom: '3px solid #2980B9',
    padding: '10px 20px',
    textTransform: 'uppercase'
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
