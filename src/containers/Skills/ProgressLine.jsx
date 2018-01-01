// React
import React from 'react';

// NPM Modules
import styled from 'styled-components';
import { Line } from 'rc-progress';

const ProgressLine = props => {
  let { progressText, percent } = props;
  return (
    <ProgressContainer>
      <ProgressText>{progressText}</ProgressText>
      <ProgLine
        percent={percent}
        strokeWidth={'5'}
        strokeColor={'#2980B9'}
        trailWidth={'5'}
        trailColor={'#F5F5F5'}
        strokeLinecap={'square'}
      />
    </ProgressContainer>
  );
};

export default ProgressLine;

const ProgressContainer = styled.div`
  color: #fff;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.25rem 0;
`;

const ProgressText = styled.p`
  margin: 0;
  padding: 0.25rem 0;
`;

const ProgLine = styled(Line)`
  width: 300px;
`;
