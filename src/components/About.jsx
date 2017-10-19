// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

export default class About extends React.Component {
  render() {
    return (
      <div className={css(styles.columnContainer, styles.fadeIn)}>
        <h2 className={css(styles.header)}> About </h2>
        <div className={css(styles.rowContainer)}>
          <div className={css(styles.columnContainer, styles.leftContainer)}>
            <img
              src={'/images/rahul-1.jpg'}
              className={css(styles.image)}
              alt="Me"
            />
          </div>
          <div className={css(styles.rightContainer)}>
            <p className={css(styles.paragraph)}>
              <span className={css(styles.highlighted)}>Hello! </span>
              I'm Rahul, a senior at UC Berkeley.
            </p>
            <p className={css(styles.paragraph)}>
              I tend to spend my time
              <span className={css(styles.highlighted)}> creating </span>
              - websites, articles, products, food - and I love every second of
              it!
            </p>
            <p className={css(styles.paragraph)}>
              <span className={css(styles.highlighted)}>Capabilities</span>
              <br />
              - Studies Computer Science and Economics <br />
              - Walks anywhere and everywhere within a 2 mile radius <br />
              - Eats anything pescatarian thanks to a bottomless stomach <br />
              - Raps anything from Childish Gambino to Hamilton on command
            </p>
            <p className={css(styles.paragraph)}>
              <span className={css(styles.highlighted)}>Whereabouts</span>
              <br />
              - Berkeley campus: searching for hidden areas and secrets <br />
              - Sacks Coffee: filling up on my weekly caffeine and studying{' '}
              <br />
              - My Kitchen: prepping meals for the week or baking goodies <br />
              - Memorial Stadium Gym: getting swole every day before class
            </p>
            <p className={css(styles.paragraph)}>
              <span className={css(styles.highlighted)}>Quirks</span>
              <br />
              - Strategizes how to climb every statue he sees <br />
              - Takes pictures of food before eating - "it's for the Yelp"{' '}
              <br />
              - Considers Medium and Quora his favorite social media <br />
              - Feeds off the energy of ideas to make the world a better place
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  header: {
    color: '#333',
    fontSize: '1.875em',
    borderBottom: '3px solid #2980B9',
    padding: '10px 20px',
    textTransform: 'uppercase'
  },

  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px'
  },

  leftContainer: {
    flex: 1
  },

  rightContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    textAlign: 'left'
  },

  image: {
    width: '400px',
    height: '400px',
    border: '3px solid #2980B9',
    borderRadius: '50%'
  },

  paragraph: {
    color: '#333',
    fontSize: '1.25em',
    lineHeight: '1.375em',
    margin: 0,
    padding: '10px 0'
  },

  highlighted: {
    color: '#2980B9',
    fontWeight: 'bold',
    letterSpacing: '0.035em'
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
