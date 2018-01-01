import styled from "styled-components";

const Image = styled.img`
  width: ${props => props.width || "400px"};
  height: ${props => props.height || "400px"};
  border: 3px solid #2980b9;
  border-radius: ${props => (props.round ? "50%" : 0)};
`;

export { Image };
