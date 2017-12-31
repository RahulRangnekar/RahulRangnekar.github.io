// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';

// Local Components
import ProgressLine from './ProgressLine.jsx';
import ProgressCircle from './ProgressCircle.jsx';

// Stylesheets
import { generalStyles } from '../../stylesheets/general_stylesheet.js';

const Skills = props => {
  return (
    <div className={css(styles.skillsContainer, generalStyles.fadeIn)}>
      <h2 className={css(generalStyles.header, generalStyles.altHeader)}>
        What I'm Good At
      </h2>

      <div className={css(styles.bodyContainer)}>
        <div className={css(generalStyles.columnContainer)}>
          <h3 className={css(styles.sectionHeader)}>Programming</h3>
          <div className={css(styles.pContainer)}>
            <div className={css(styles.pSubcontainer)}>
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
            <div className={css(styles.pSubcontainer)}>
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

        <div className={css(generalStyles.columnContainer)}>
          <h3 className={css(styles.sectionHeader)}>Product</h3>
          <div className={css(styles.prodContainer)}>
            <div className={css(styles.prodSubcontainer)}>
              {progressPies.slice(0, 3).map(pie => {
                return (
                  <ProgressCircle
                    key={pie.text}
                    progressText={pie.text}
                    percent={pie.percent}
                  />
                );
              })}
            </div>
            <div className={css(styles.prodSubcontainer)}>
              {progressPies.slice(3, 6).map(pie => {
                return (
                  <ProgressCircle
                    key={pie.text}
                    progressText={pie.text}
                    percent={pie.percent}
                  />
                );
              })}
            </div>
            <div className={css(styles.prodSubcontainer)}>
              {progressPies.slice(6, 7).map(pie => {
                return (
                  <ProgressCircle
                    key={pie.text}
                    progressText={pie.text}
                    percent={pie.percent}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

const styles = StyleSheet.create({
  skillsContainer: {
    background: 'url(images/self/beach.jpg)',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'calc(100vh - 108px)'
  },

  bodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'wrap',
    alignItems: 'baseline',
    justifyContent: 'center'
  },

  sectionHeader: {
    color: '#FFF',
    fontSize: '1.625em',
    margin: '5px 0',
    padding: 0
  },

  pContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },

  prodContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  pSubcontainer: {
    margin: '0 15px'
  },

  prodSubcontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'wrap',
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

const progressPies = [
  {
    text: 'Product Management',
    percent: '70'
  },
  {
    text: 'Written Communication',
    percent: '85'
  },
  {
    text: 'Strategic Thinking',
    percent: '80'
  },
  {
    text: 'Project Management',
    percent: '70'
  },
  {
    text: 'User Research',
    percent: '65'
  },
  {
    text: 'Wireframing',
    percent: '50'
  }
];
