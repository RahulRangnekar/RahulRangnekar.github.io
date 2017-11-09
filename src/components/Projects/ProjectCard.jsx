// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';

// Stylesheets
import { generalStyles } from '../../stylesheets/general_stylesheet.js';

export default class ProjectCard extends React.Component {
  render() {
    let { title, link, image, text, hoverStyle } = this.props;
    return (
      <Link
        to={link}
        className={css(styles.cardContainer, generalStyles.fadeIn, hoverStyle)}
      >
        <div className={css(styles.borderContainer)}>
          <h2 className={css(styles.header)}>{title}</h2>
          <img className={css(styles.image)} src={image} alt={title} />
        </div>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    height: '325px',
    width: '325px',
    padding: '5px 0 0',
    textDecoration: 'none',
    ':hover': {
      cursor: 'pointer'
    }
  },

  borderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #888',
    margin: '0 5px',
    position: 'relative',
    height: '90%',
    width: '90%'
  },

  header: {
    fontSize: '1.5em'
  },

  image: {
    width: '250px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
});
