// React
import React from 'react';

// NPM Modules
import { Link, NavLink } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { slide as Menu } from 'react-burger-menu';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    let navlinks = navLinkInfo.map(item => {
      return (
        <NavLink
          key={item.text}
          to={item.to}
          target={item.openBlank && 'blank'}
          className={css(styles.link)}
          activeClassName={css(styles.activeLink)}
        >
          {item.text}
        </NavLink>
      );
    });

    return (
      <div id="navbar-container">
        <div className={css(styles.headerContainer)}>
          <Link to="/" className={css(styles.headerLink)}>
            <img
              src="../images/logo-white.png"
              className={css(styles.logo)}
              alt={'personal logo'}
            />
          </Link>
          <div className={css(styles.smallScreenContainer)}>
            <Menu
              className={css(styles.menu)}
              styles={menuStyles}
              isOpen={this.state.isMenuOpen}
              onStateChange={() => this.toggleMenu}
              width={200}
              right
            >
              <div
                className={css(styles.linkContainer, styles.columnContainer)}
              >
                {navlinks}
              </div>
            </Menu>
          </div>
          <div className={css(styles.regularScreenContainer)}>
            <div className={css(styles.linkContainer)}>{navlinks}</div>
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

  regularScreenContainer: {
    '@media(max-width: 600px)': {
      display: 'none'
    }
  },

  smallScreenContainer: {
    '@media(min-width: 601px)': {
      display: 'none'
    }
  },

  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  link: {
    color: '#FFF',
    padding: '5px',
    margin: '10px',
    textDecoration: 'none',
    ':hover': {
      color: '#2980B9'
    }
  },

  activeLink: {
    borderBottom: '2px solid #2980B9'
  }
});

const menuStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '16px'
  },
  bmBurgerBars: {
    background: '#F5F5F5'
  },
  bmCrossButton: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#F5F5F5'
  },
  bmMenu: {
    background: '#333',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

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
