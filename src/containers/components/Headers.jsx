import styled from 'styled-components';

const PageHeader = styled.h2`
  border-bottom: 3px solid #2980b9;
  color: ${props => (props.alt ? '#FFF' : '#333')};
  font-size: 1.9rem;
  letter-spacing: 0.025rem;
  padding: 0.25rem 1.35rem;
  text-transform: uppercase;
`;

export { PageHeader };
