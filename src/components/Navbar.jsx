// React
import React from 'react';

// NPM Modules
import { Link, NavLink } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

export default class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar-container">
        <div className={css(styles.headerContainer)}>
          <Link to="/" className={css(styles.headerLink)}>
            <img
              src="images/logo-white.png"
              className={css(styles.logo)}
              alt={'personal logo'}
            />
          </Link>
          <div className={css(styles.linkContainer)}>
            <NavLink to="/about" className={css(styles.link)}>
              About
            </NavLink>
            <NavLink to="/skills" className={css(styles.link)}>
              Skills
            </NavLink>
            <NavLink to="/passions" className={css(styles.link)}>
              Passions
            </NavLink>
            <NavLink to="/projects" className={css(styles.link)}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={css(styles.link)}>
              Contact
            </NavLink>
          </div>
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
    padding: '10px 0',
    zIndex: 2,
    position: 'absolute',
    top: '0'
  },

  headerLink: {
    padding: '0 10px',
    textDecoration: 'none'
  },

  logo: {
    height: '40px',
    width: '44px'
  },

  linkContainer: {
    fontSize: '0.875em',
    fontWeight: 'bold',
    letterSpacing: '0.0125em',
    textTransform: 'uppercase',
    padding: '0 10px'
  },

  link: {
    color: '#FFF',
    padding: '5px',
    margin: '0 5px',
    textDecoration: 'none',
    ':hover': {
      color: '#2980B9'
    }
  }
});
