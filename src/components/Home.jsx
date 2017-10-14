// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

export default class Home extends React.Component {
  render() {
    return (
      <div className={css(styles.homeContainer, styles.fadeIn)}>
        <img
          src="images/cover copy.jpg"
          className={css(styles.image)}
          alt="Me - Rahul Rangnekar"
        />
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    padding: '0',
    margin: '0',
    minHeight: '100%',
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
    padding: '5px 0'
  },

  roles: {
    fontSize: '1.5em',
    fontWeight: '200',
    margin: 0,
    padding: '5px'
  },

  image: {
    // maxWidth: '100%',
    width: 'auto',
    height: 'auto',
    margin: '0',
    padding: '0'
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
