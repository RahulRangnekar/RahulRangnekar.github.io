// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import { Circle } from 'rc-progress';

const ProgressCircle = props => {
  let { progressText, percent } = props;
  return (
    <div className={css(styles.progressContainer)}>
      <p className={css(styles.progressText)}>{progressText}</p>
      <div className={css(styles.circleContainer)}>
        <span className={css(styles.percent)}>{percent}%</span>
        <Circle
          percent={percent}
          strokeWidth={'13'}
          strokeColor={'#2980B9'}
          trailWidth={'12'}
          trailColor={'#F5F5F5'}
          strokeLinecap={'square'}
          className={css(styles.progress)}
        />
      </div>
    </div>
  );
};

export default ProgressCircle;

const styles = StyleSheet.create({
  progress: {
    width: '100px'
  },

  progressContainer: {
    color: '#FFF',
    fontSize: '0.875em',
    letterSpacing: '0.025em',
    margin: '0 10px',
    padding: '3px 0',
    textAlign: 'center',
    width: '165px'
  },

  progressText: {
    padding: '6px 0',
    margin: '0'
  },

  circleContainer: {
    position: 'relative'
  },

  percent: {
    fontSize: '1.25em',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
});
