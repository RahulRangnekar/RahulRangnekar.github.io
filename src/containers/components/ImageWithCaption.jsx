import React from 'react';

// npm modules
import styled from 'styled-components';

// components
import { Image } from './Images';
import { ColumnContainer } from './Containers';

const ImageWithCaption = props => {
  return (
    <ImageContainer>
      <Image
        src={props.src}
        alt={props.alt}
        height={props.height}
        width={props.width}
      />
      <Caption>{props.caption}</Caption>
    </ImageContainer>
  );
};

export default ImageWithCaption;

const ImageContainer = ColumnContainer.extend`
  margin: 0.675rem 0;
  max-width: 100%;
`;

const Caption = styled.p`
  font-size: 0.875rem;
  color: #333;
  margin: 2px 0;
`;
