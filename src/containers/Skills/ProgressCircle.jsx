// React
import React from 'react';

// NPM Modules
import styled from 'styled-components';
import { Circle } from 'rc-progress';

const ProgressCircle = props => {
  let { progressText, percent } = props;
  return (
    <ProgressContainer>
      <ProgressText>{progressText}</ProgressText>
      <CircleContainer>
        <span>{percent}%</span>
        <ProgCircle
          percent={percent}
          strokeWidth={'13'}
          strokeColor={'#2980B9'}
          trailWidth={'12'}
          trailColor={'#F5F5F5'}
          strokeLinecap={'square'}
        />
      </CircleContainer>
    </ProgressContainer>
  );
};

export default ProgressCircle;

const ProgressContainer = styled.div`
  color: #fff;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  margin: 0 0.675rem;
  padding: 0.25rem 0;
  text-align: center;
  width: 165px;
`;

const ProgressText = styled.p`
  margin: 0;
  padding: 0.55rem 0;
`;

const CircleContainer = styled.div`
  position: relative;

  span {
    font-size: 1.1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ProgCircle = styled(Circle)`
  width: 100px;
`;
