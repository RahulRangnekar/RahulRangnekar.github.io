// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { Circle } from 'rc-progress';

export default class ProgressCircle extends React.Component {
  render() {
    let { percent, gapDegree, gapPosition } = this.props;

    return (
      <Circle
        percent={percent}
        strokeWidth={'5'}
        strokeColor={'#2980B9'}
        trailWidth={'5'}
        trailColor={'#F5F5F5'}
        strokeLinecap={'square'}
        className={css(styles.progress)}
        gapDegree={gapDegree ? gapDegree : 0}
        gapPosition={gapPosition ? gapPosition : 'top'}
      />
    );
  }
}

const styles = StyleSheet.create({
  progress: {
    padding: '5px'
  }
});
