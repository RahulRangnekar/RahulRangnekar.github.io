// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

export default class Passions extends React.Component {
  render() {
    return <div id="navbar-container" className={css(styles.fadeIn)} />;
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#333',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0'
  },

  headerLink: {
    padding: '0 10px',
    textDecoration: 'none'
  },

  logo: {
    height: '45px',
    width: '50px'
  },

  linkContainer: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.875em',
    textTransform: 'uppercase',
    padding: '0 10px'
  },

  link: {
    color: '#FFF',
    padding: '5px',
    margin: '0 5px',
    textDecoration: 'none'
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
