// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';

// Stylesheets
import { generalStyles } from '../stylesheets/general_stylesheet.js';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={css(styles.footerContainer, generalStyles.fadeIn)}>
        <p className={css(styles.text)}>Peace and Love</p>
        <div className={css(styles.socialMediaContainer)}>
          {FOOTER_INFO.map(media => {
            return (
              <Link
                key={media.type}
                className={css(styles.mediaLink, styles.link)}
                to={media.link}
                target="blank"
              >
                <i className={` fa fa-${media.icon}`} aria-hidden="true" />
              </Link>
            );
          })}
        </div>
        <Link
          className={css(styles.link)}
          to={'https://github.com/rahrang/rahrang.github.io/'}
          target="blank"
        >
          GitHub
        </Link>
      </div>
    );
  }
}

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
    textAlign: 'center'
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
  }
});

const FOOTER_INFO = [
  {
    type: 'email',
    link: 'mailto:rr@berkeley.edu',
    icon: 'envelope'
  },
  {
    type: 'github',
    link: 'https://github.com/rahrang',
    icon: 'github'
  },
  {
    type: 'medium',
    link: 'https://medium.com/@rahrang',
    icon: 'medium'
  },
  {
    type: 'linkedin',
    link: 'https://www.linkedin.com/in/rahrang',
    icon: 'linkedin'
  },
  {
    type: 'yelp',
    link: 'https://rahrang.yelp.com',
    icon: 'yelp'
  },
  {
    type: 'quora',
    link: 'https://www.quora.com/profile/Rahul-Rangnekar-6',
    icon: 'quora'
  },
  {
    type: 'spotify',
    link: 'https://open.spotify.com/user/rahrang',
    icon: 'spotify'
  },
  {
    type: 'twitter',
    link: 'https://twitter.com/rahrangnek',
    icon: 'twitter'
  },
  {
    type: 'instagram',
    link: 'https://www.instagram.com/rahrang/',
    icon: 'instagram'
  }
];
