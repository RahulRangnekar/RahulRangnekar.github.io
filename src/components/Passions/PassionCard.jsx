// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';

import { generalStyles } from '../../stylesheets/general_stylesheet.js';

export default class PassionCard extends React.Component {
  render() {
    let { icon, passion, text } = this.props;
    let iconToRender = (
      <i className={css(styles.icon) + ` fa fa-${icon}`} aria-hidden="true" />
    );
    return (
      <div
        className={css(
          generalStyles.rowContainer,
          generalStyles.fadeIn,
          styles.container
        )}
      >
        {iconToRender}
        <div className={css(styles.textContainer)}>
          <p className={css(styles.passion)}>{passion}</p>
          <p className={css(styles.text)}>{text}</p>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: '15px 10px',
    maxWidth: '450px'
  },

  icon: {
    color: '#333',
    fontSize: '2em',
    margin: '0 15px',
    width: '100px'
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  },

  passion: {
    color: '#2980B9',
    fontSize: '1.25em',
    letterSpacing: '0.035em',
    margin: '2.5px 0',
    textTransform: 'uppercase'
  },

  text: {
    fontSize: '1em',
    margin: '2.5px 0',
    letterSpacing: '0.025em'
  }
});
