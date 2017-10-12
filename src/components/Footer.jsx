// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

export default class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar-container" className={css(styles.fadeIn)}>
        <div className={css(styles.headerContainer)}>
          <Link to="/" className={css(styles.headerLink)}>
            <img
              src="images/logo-white.png"
              className={css(styles.logo)}
              alt={'yelp logo'}
            />
          </Link>
          <div className={css(styles.linkContainer)} />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#D32323',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0'
  },

  headerLink: {
    color: '#F5F5F5',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: 'none',
    ':hover': {
      color: '#333'
    }
  },

  logo: {
    height: '77px',
    width: '120px'
  },

  header: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.75em',
    letterSpacing: '0.025em',
    margin: 0,
    padding: '0 0 0 10px',
    textTransform: 'uppercase'
  },

  creditContainer: {
    color: '#F5F5F5',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Muli, sans-serif',
    padding: '0 20px 0 0'
  },

  creditLink: {
    color: '#F5F5F5',
    cursor: 'pointer',
    padding: '0 3px',
    margin: '0 5px',
    textDecoration: 'none',
    ':hover': {
      color: '#333'
    }
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
