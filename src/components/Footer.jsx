// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

const FOOTER_INFO = [
  {
    media: 'github',
    link: '/',
    icon: 'github'
  },
  {
    media: 'medium',
    link: '/',
    icon: 'medium'
  },
  {
    media: 'linkedin',
    link: '/',
    icon: 'linkedin'
  },
  {
    media: 'yelp',
    link: '/',
    icon: 'yelp'
  },
  {
    media: 'quora',
    link: '/',
    icon: 'quora'
  },
  {
    media: 'spotify',
    link: '/',
    icon: 'spotify'
  },
  {
    media: 'twitter',
    link: '/',
    icon: 'twitter'
  },
  {
    media: 'instagram',
    link: '/',
    icon: 'instagram'
  }
];

export default class Navbar extends React.Component {
  render() {
    const socialMediaLinks = FOOTER_INFO.map(media => {
      return (
        <Link
          className={css(styles.mediaLink, styles.link)}
          to={media.link}
          target="blank"
        >
          <i className={` fa fa-${media.icon}`} aria-hidden="true" />
        </Link>
      );
    });

    return (
      <div className={css(styles.footerContainer, styles.fadeIn)}>
        <p className={css(styles.text)}>Peace and Love</p>
        <div className={css(styles.socialMediaContainer)}>
          {socialMediaLinks}
        </div>
        <Link
          className={css(styles.link)}
          to={'https://github.com/rahrang/rahrang.github.io/'}
          target="blank"
        >
          Source Code
        </Link>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#333',
    color: '#FFF',
    fontFamily: 'Raleway, sans-serif',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 15px',
    fontSize: '0.875em'
  },

  mediaLink: {
    padding: '0 5px',
    margin: '0 5px',
    fontSize: '1.25em'
  },

  link: {
    color: '#FFF',
    textDecoration: 'none',
    ':hover': {
      color: '#2980B9'
    }
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
