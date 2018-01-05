import styled from "styled-components";

const Paragraph = styled.p`
  color: #333;
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin: 0;
  padding: 0.675rem 0;
  max-width: 100%;
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const TaglineParagraph = Paragraph.extend`
  font-weight: bold;
`;

const ParagraphItem = Paragraph.withComponent("li").extend`
  font-size: 1.05rem;
  line-height: 1.125rem;
  padding: 0.125rem 0;
`;

export { Paragraph, TaglineParagraph, ParagraphItem };
