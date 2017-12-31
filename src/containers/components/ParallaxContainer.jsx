import styled from 'styled-components';

const ParallaxContainer = styled.div`
  background: url(${props => props.srcURL});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #333;
  padding: 0;
  margin: 0;
  position: relative;
  min-height: calc(100vh - 108px);
`;

export default ParallaxContainer;
