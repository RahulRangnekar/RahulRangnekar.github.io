// React
import React from 'react';

// NPM Modules
import { Link, NavLink } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';

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
            {navLinkInfo.map(item => {
              return (
                <NavLink
                  to={item.to}
                  target={item.openBlank && 'blank'}
                  className={css(styles.link)}
                  activeClassName={css(styles.activeLink)}
                >
                  {item.text}
                </NavLink>
              );
            })}
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
    padding: '10px 0'
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
    margin: '0 10px',
    textDecoration: 'none',
    ':hover': {
      color: '#2980B9'
    }
  },

  activeLink: {
    borderBottom: '2px solid #2980B9'
  }
});

const navLinkInfo = [
  {
    to: '/about',
    text: 'About'
  },
  {
    to: '/skills',
    text: 'Skills'
  },
  {
    to: '/passions',
    text: 'Passions'
  },
  {
    to: '/projects',
    text: 'Projects'
  },
  {
    to: '/Rahul_Rangnekar_Resume.pdf',
    text: 'Resume',
    openBlank: true
  }
];
