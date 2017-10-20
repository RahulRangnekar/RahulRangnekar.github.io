// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import { Line } from 'rc-progress';

export default class ProgressLine extends React.Component {
  render() {
    let { progressText, percent } = this.props;

    return (
      <div className={css(styles.progressContainer)}>
        <p className={css(styles.progressText)}>{progressText}</p>
        <Line
          percent={percent}
          strokeWidth={'5'}
          strokeColor={'#2980B9'}
          trailWidth={'5'}
          trailColor={'#F5F5F5'}
          strokeLinecap={'square'}
          className={css(styles.progress)}
        />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  progress: {
    width: '300px'
  },

  progressContainer: {
    color: '#FFF',
    fontSize: '0.875em',
    letterSpacing: '0.025em',
    padding: '3px 0'
  },

  progressText: {
    padding: '3px 0',
    margin: '0'
  }
});
