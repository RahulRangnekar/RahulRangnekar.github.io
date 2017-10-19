// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

import ProgressLine from './ProgressLine.jsx';
import ProgressCircle from './ProgressCircle.jsx';

export default class Skills extends React.Component {
  render() {
    return (
      <div className={css(styles.skillsContainer, styles.fadeIn)}>
        <h2 className={css(styles.header)}> Skills </h2>
        <div className={css(styles.container)}>
          <h3 className={css(styles.sectionHeader)}>Programming</h3>
          <div className={css(styles.programmingContainer)}>
            <div className={css(styles.programmingSubcontainer)}>
              <div className={css(styles.subsectionContainer)}>
                <h4 className={css(styles.subsectionHeader)}>Languages</h4>
                <div className={css(styles.progressBars)}>
                  {progressBars.slice(0, 3).map(bar => {
                    return (
                      <ProgressLine
                        key={bar.text}
                        progressText={bar.text}
                        percent={bar.percent}
                      />
                    );
                  })}
                </div>
              </div>
              <div className={css(styles.subsectionContainer)}>
                <h4 className={css(styles.subsectionHeader)}>Libraries</h4>
                <div className={css(styles.progressBars)}>
                  {progressBars.slice(3, 4).map(bar => {
                    return (
                      <ProgressLine
                        key={bar.text}
                        progressText={bar.text}
                        percent={bar.percent}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={css(styles.programmingSubcontainer)}>
              <div className={css(styles.subsectionContainer)}>
                <h4 className={css(styles.subsectionHeader)}>Frameworks</h4>
                <div className={css(styles.progressBars)}>
                  {progressBars.slice(4, 7).map(bar => {
                    return (
                      <ProgressLine
                        key={bar.text}
                        progressText={bar.text}
                        percent={bar.percent}
                      />
                    );
                  })}
                </div>
              </div>
              <div className={css(styles.subsectionContainer)}>
                <h4 className={css(styles.subsectionHeader)}>Databases</h4>
                <div className={css(styles.progressBars)}>
                  {progressBars.slice(7, 8).map(bar => {
                    return (
                      <ProgressLine
                        key={bar.text}
                        progressText={bar.text}
                        percent={bar.percent}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  skillsContainer: {
    background: 'url(images/beach.jpg)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'calc(100vh - 108px)'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  header: {
    borderBottom: '3px solid #2980B9',
    color: '#FFF',
    fontSize: '1.875em',
    letterSpacing: '0.025em',
    padding: '5px 20px',
    textTransform: 'uppercase'
  },

  sectionHeader: {
    color: '#FFF',
    fontSize: '1.625em',
    margin: '5px 0',
    padding: 0
  },

  programmingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  programmingSubcontainer: {
    margin: '0 15px'
  },

  subsectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    margin: '10px 0'
  },

  subsectionHeader: {
    color: '#FFF',
    fontSize: '1em',
    letterSpacing: '0.035em',
    textTransform: 'uppercase',
    margin: '5px 0',
    padding: 0
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});

const progressBars = [
  // Languages
  {
    text: 'HTML / CSS / JavaScript',
    percent: '85'
  },
  {
    text: 'Python / SQL',
    percent: '75'
  },
  {
    text: 'Java',
    percent: '65'
  },

  // Libraries
  {
    text: 'React JS',
    percent: '80'
  },

  // Frameworks
  {
    text: 'Node JS',
    percent: '80'
  },
  {
    text: 'Redux',
    percent: '75'
  },
  {
    text: 'Bootstrap / Materialize',
    percent: '75'
  },

  // Databases
  {
    text: 'MongoDB',
    percent: '60'
  }
];
