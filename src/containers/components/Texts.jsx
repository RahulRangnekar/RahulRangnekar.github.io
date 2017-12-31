import styled from 'styled-components';

const Paragraph = styled.p`
  color: #333;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 0;
  padding: 0.675rem 0;
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const TaglineParagraph = Paragraph.extend`
  font-weight: bold;
`;

export { Paragraph, TaglineParagraph };
