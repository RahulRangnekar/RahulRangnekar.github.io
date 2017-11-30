// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import SocialMediaBar from 'react-social-media-bar';

// Stylesheets
import { generalStyles } from '../stylesheets/general_stylesheet.js';

const Footer = props => {
  return (
    <div className={css(styles.footerContainer, generalStyles.fadeIn)}>
      <p className={css(styles.text)}>Peace and Love</p>
      <SocialMediaBar
        icons={FOOTER_INFO}
        iconColor={'#F5F5F5'}
        iconSize={'1.25em'}
        hoverColor={'#2980B9'}
        hoverOpacity={0.9}
        margin={{ top: '0px', right: '7.5px', bottom: '0px', left: '7.5px' }}
      />
      <a
        className={css(styles.link)}
        href={'https://github.com/rahrang/rahrang'}
        target="_blank"
      >
        GitHub
      </a>
    </div>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#333',
    color: '#FFF',
    fontSize: '0.875em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 15px',
    textAlign: 'center',
    '@media(max-width:600px)': {
      flexDirection: 'column'
    }
  },

  link: {
    color: '#FFF',
    cursor: 'pointer',
    margin: '10px 0',
    textDecoration: 'none',
    ':hover': {
      color: '#2980B9'
    }
  }
});

const FOOTER_INFO = [
  {
    media: 'envelope',
    link: 'mailto:rr@berkeley.edu'
  },
  {
    media: 'github',
    link: 'https://github.com/rahrang'
  },
  {
    media: 'medium',
    link: 'https://medium.com/@rahrang'
  },
  {
    media: 'linkedin',
    link: 'https://www.linkedin.com/in/rahrang'
  },
  {
    media: 'yelp',
    link: 'https://rahrang.yelp.com'
  },
  {
    media: 'quora',
    link: 'https://www.quora.com/profile/Rahul-Rangnekar-6'
  },
  {
    media: 'spotify',
    link: 'https://open.spotify.com/user/rahrang'
  },
  {
    media: 'twitter',
    link: 'https://twitter.com/rahrangnek'
  },
  {
    media: 'instagram',
    link: 'https://www.instagram.com/rahrang/'
  }
];
