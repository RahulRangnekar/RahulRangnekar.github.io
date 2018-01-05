import styled from "styled-components";

const Image = styled.img`
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  max-width: 100%;
  border: 3px solid #2980b9;
  border-radius: ${props => (props.round ? "50%" : 0)};
`;

export { Image };
