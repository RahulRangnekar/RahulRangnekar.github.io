// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';

// Stylesheets
import { generalStyles } from '../../stylesheets/general_stylesheet.js';

export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }
  render() {
    let { title, subtitle, link, image, text } = this.props.project;
    let { hovered } = this.state;
    return (
      <Link
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        to={link}
        className={css(containers.card, generalStyles.fadeIn)}
      >
        {!hovered ? (
          <div className={css(containers.front, generalStyles.columnContainer)}>
            <div className={css(containers.border, containers.frontBorder)}>
              <h2 className={css(styles.header)}>{title}</h2>
              <h3 className={css(styles.subtitle)}>{subtitle}</h3>
              <img className={css(styles.image)} src={image} alt={title} />
            </div>
          </div>
        ) : (
          <div className={css(containers.back, generalStyles.columnContainer)}>
            <div className={css(containers.border, containers.backBorder)}>
              <p className={css(styles.backText)}>{text}</p>
            </div>
          </div>
        )}
      </Link>
    );
  }
}

const containers = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '325px',
    width: '325px',
    margin: '2px 0',
    // outline: '1px solid #AAA',
    textDecoration: 'none'
  },

  front: {
    backgroundColor: '#FFF',
    color: '#333',
    height: '100%',
    width: '100%'
  },

  back: {
    background: 'linear-gradient(#72B0D9, #2980B9 30%, #2980B9 70%, #72B0D9)',
    color: '#FFF',
    cursor: 'pointer',
    height: '100%',
    width: '100%'
  },

  border: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90%',
    width: '90%'
  },

  frontBorder: {
    border: '1px solid #AAA',
    position: 'relative'
  },

  backBorder: {
    border: '1px solid #FFF',
    justifyContent: 'center',
    textAlign: 'center'
  }
});

const styles = StyleSheet.create({
  header: {
    fontSize: '1.5em',
    margin: '7.5px 0 2.5px',
    padding: '2.5px 0'
  },

  subtitle: {
    color: '#AAA',
    fontSize: '1em',
    fontWeight: '300',
    margin: '0',
    padding: '0'
  },

  image: {
    width: '250px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },

  backText: {
    fontSize: '1.125em',
    lineHeight: '1.25em',
    padding: '0 5px'
  }
});
