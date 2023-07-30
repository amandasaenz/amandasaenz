import React, { useState } from 'react';
import { ArtProps } from './data/ProjectData';
import styled from '@emotion/styled';
import Carousel from './Carousel';

const theme = {
  primary: '#3E9A9E',
  secondary: '#FF6561',
};

const Project: React.FC<ArtProps> = ({ ...props }) => {
  const [imgArray] = useState(props.images);

  return (
    <StyledComponents>
      <div style={{ display: 'grid', gap: '16px' }}>
        <Header>{props.title}</Header>
        <Carousel items={imgArray} />
        <Body>{props.description}</Body>
      </div>

      <div style={{ display: 'grid', gap: '8px' }}>
        <Header># software used</Header>
        <Body>
          {props.software.map((index) => (
            <div key={index}>{index}</div>
          ))}
        </Body>
      </div>

      <div style={{ display: props.demo ? '' : 'none' }}>
        <LinkStyle href={props.demo}>Get yours here!</LinkStyle>
      </div>
    </StyledComponents>
  );
};

export default Project;

const StyledComponents = styled.div`
  display: grid;
  color: ${theme.primary};
  gap: 32px;
  padding-top: 64px;
  padding-bottom: 64px;
  max-width: 700px;
  margin: 0 auto;
`;

const Body = styled.div`
  line-height: 180%;
`;

const Header = styled.div`
  font-weight: bold;
  color: ${theme.secondary};
  margin: 0;
`;

const LinkStyle = styled.a`
  color: ${theme.secondary};
  text-decoration: none;
  font-size: 14px;
  font-style: italic;
  margin: 8px 0;
  border-bottom: 1px solid ${theme.secondary};
  padding-bottom: 1px;
`;
