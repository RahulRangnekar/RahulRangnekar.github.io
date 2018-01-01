// React
import React from "react";

// node modules
import { Link } from "react-router-dom";
import styled from "styled-components";

// components
import { ColumnContainer } from "../components/Containers";
import { Image } from "../components/Images";

export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }
  render() {
    let { title, subtitle, link, image, text } = this.props.project;
    let { hovered } = this.state;
    return (
      <CardContainer
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        to={link}
      >
        {!hovered ? (
          <FrontSide>
            <FrontBorderContainer>
              <CardHeader>{title}</CardHeader>
              <SubHeader>{subtitle}</SubHeader>
              <CardImage src={image} alt={title} width="250px" height="auto" />
            </FrontBorderContainer>
          </FrontSide>
        ) : (
          <BackSide>
            <BackBorderContainer>
              <BackText>{text}</BackText>
            </BackBorderContainer>
          </BackSide>
        )}
      </CardContainer>
    );
  }
}

const CardContainer = ColumnContainer.withComponent(Link).extend`
  height: 325px;
  width: 325px;
  margin: 0.125rem 0;
  text-decoration: none;
`;

const FrontSide = ColumnContainer.extend`
  background-color: #fff;
  color: #333;
  height: 100%;
  width: 100%;
`;

const BackSide = ColumnContainer.extend`
  background: linear-gradient(#72b0d9, #2980b9 30%, #2980b9 70%, #72b0d9);
  color: #fff;
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

const BorderContainer = ColumnContainer.extend`
  height: 90%;
  width: 90%;
`;

const FrontBorderContainer = BorderContainer.extend`
  border: 1px solid #aaa;
  position: relative;
  justify-content: initial;
`;

const BackBorderContainer = BorderContainer.extend`
  border: 1px solid #fff;
  text-align: center;
  justify-content: center;
`;

const CardHeader = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0 0.175rem;
  padding: 0.175rem 0;
`;

const SubHeader = styled.h3`
  color: #aaa;
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
`;

const CardImage = Image.extend`
  border: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BackText = styled.p`
  font-size: 1.125rem;
  line-height: 1.375rem;
  padding: 0 0.325rem;
`;
