// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';

// Stylesheets
import { generalStyles } from '../stylesheets/general_stylesheet.js';

export default class Home extends React.Component {
  render() {
    return (
      <div className={css(styles.homeContainer, generalStyles.fadeIn)}>
        <div className={css(styles.textContainer)}>
          <h1 className={css(styles.name)}>Rahul Rangnekar</h1>
          <h2 className={css(styles.roles)}>
            Software Developer | Product Manager | Writer
          </h2>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    background: 'url(images/self/cover.jpg)',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#333',
    padding: '0',
    margin: '0',
    minHeight: 'calc(100vh - 108px)',
    position: 'relative'
  },

  textContainer: {
    color: '#FFF',
    position: 'absolute',
    left: '2.5%',
    top: '40%',
    textAlign: 'center'
  },

  name: {
    fontSize: '4em',
    letterSpacing: '0.025em',
    textTransform: 'uppercase',
    margin: '0',
    padding: '5px 0',
    '@media(max-width:600px)': {
      fontSize: '3em'
    }
  },

  roles: {
    fontSize: '1.5em',
    fontWeight: '200',
    margin: '0',
    padding: '5px',
    '@media(max-width:600px)': {
      fontSize: '1em'
    }
  }
});
