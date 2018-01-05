import styled from "styled-components";
import { Link } from "react-router-dom";

const IntLink = styled(Link)`
  color: #2980b9;
  font-size: inherit;
  text-decoration: none;
  &:hover {
    color: #333;
  }
`;

const IntButtonLink = IntLink.extend`
  background-color: rgba(0, 0, 0, 0);
  border: 3px solid #2980b9;
  color: #2980b9;
  font-size: ${props => props.fontSize || "1rem"};
  margin: 0.25rem 0.5rem;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  &:hover {
    background-color: #2980b9;
    color: #fff;
  }
`;

const ExtLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer"
})`
  color: #333;
  font-size: inherit;
  text-decoration: none;
  &:hover {
    color: #2980b9;
  }
`;

const ExtButtonLink = ExtLink.extend`
  background-color: rgba(0, 0, 0, 0);
  border: 3px solid #333;
  color: #333;
  font-size: ${props => props.fontSize || "1rem"};
  margin: 0.25rem 0.5rem;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const ProjLink = ExtButtonLink.extend`
  margin: 0.25rem 0;
`;

export { IntLink, IntButtonLink, ExtLink, ExtButtonLink, ProjLink };
