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

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
