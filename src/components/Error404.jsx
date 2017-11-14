// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';

// Stylesheets
import { generalStyles } from '../stylesheets/general_stylesheet.js';

export default class Error404 extends React.Component {
  componentDidMount() {
    let pathname = this.props.location.pathname;
    switch (pathname) {
      case '/spotify-top-10':
        return this.props.history.push('/projects/spotify');
      case '/yelp-dataset-project':
        return this.props.history.push('/projects/yelp-dataset');
      default:
        return setTimeout(
          function() {
            this.props.history.push('/');
          }.bind(this),
          3000
        );
    }
  }

  render() {
    return (
      <div className={css(generalStyles.columnContainer, generalStyles.fadeIn)}>
        <h1 className={css(styles.h1)}>Sorry, this page does not exist.</h1>
        <img
          className={css(styles.image)}
          src="images/error404.jpg"
          alt="error -- this page does not exist"
        />
        <h2 className={css(styles.h2)}>You will be redirected home.</h2>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    color: '#333',
    fontSize: '2em'
  },

  image: {
    border: '3px solid #2980B9',
    height: '691px',
    width: '389px'
  },

  h2: {
    color: '#333',
    fontSize: '1.5em'
  }
});
