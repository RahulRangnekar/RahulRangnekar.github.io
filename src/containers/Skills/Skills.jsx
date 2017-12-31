// React
import React from 'react';

// node modules
import styled from 'styled-components';

// components
import {
  ParallaxContainer,
  ColumnContainer,
  RowContainer
} from '../components/Containers';
import {
  PageHeader,
  SectionHeader,
  SubSectionHeader
} from '../components/Headers';

import ProgressLine from './ProgressLine';
import ProgressCircle from './ProgressCircle';
import { PROGRESS_BARS, PROGRESS_PIES } from './ProgressInfo';

// Stylesheets
import { generalStyles } from '../../stylesheets/general_stylesheet.js';

const Skills = props => {
  return (
    <SkillsContainer srcURL="images/self/beach.jpg">
      <PageHeader alt>What I'm Good At</PageHeader>
      <BodyContainer>
        <ColumnContainer>
          <SectionHeader>Programming</SectionHeader>
          <RowContainer>
            <SubContainer>
              <SubSectionContainer>
                <SubSectionHeader>Languages</SubSectionHeader>
                {PROGRESS_BARS.filter(bar => {
                  return bar.type === 'language';
                }).map(bar => {
                  return (
                    <ProgressLine
                      key={bar.text}
                      progressText={bar.text}
                      percent={bar.percent}
                    />
                  );
                })}
              </SubSectionContainer>
              <SubSectionContainer>
                <SubSectionHeader>Libraries</SubSectionHeader>
                {PROGRESS_BARS.filter(bar => {
                  return bar.type === 'library';
                }).map(bar => {
                  return (
                    <ProgressLine
                      key={bar.text}
                      progressText={bar.text}
                      percent={bar.percent}
                    />
                  );
                })}
              </SubSectionContainer>
            </SubContainer>
            <SubContainer>
              <SubSectionContainer>
                <SubSectionHeader>Frameworks</SubSectionHeader>
                {PROGRESS_BARS.filter(bar => {
                  return bar.type === 'framework';
                }).map(bar => {
                  return (
                    <ProgressLine
                      key={bar.text}
                      progressText={bar.text}
                      percent={bar.percent}
                    />
                  );
                })}
              </SubSectionContainer>
              <SubSectionContainer>
                <SubSectionHeader>Databases</SubSectionHeader>
                {PROGRESS_BARS.filter(bar => {
                  return bar.type === 'database';
                }).map(bar => {
                  return (
                    <ProgressLine
                      key={bar.text}
                      progressText={bar.text}
                      percent={bar.percent}
                    />
                  );
                })}
              </SubSectionContainer>
            </SubContainer>
          </RowContainer>
        </ColumnContainer>

        <ColumnContainer>
          <SectionHeader>Product</SectionHeader>
          <ColumnContainer>
            <ProdSubContainer>
              {PROGRESS_PIES.slice(0, 3).map(pie => {
                return (
                  <ProgressCircle
                    key={pie.text}
                    progressText={pie.text}
                    percent={pie.percent}
                  />
                );
              })}
            </ProdSubContainer>
            <ProdSubContainer>
              {PROGRESS_PIES.slice(3, 6).map(pie => {
                return (
                  <ProgressCircle
                    key={pie.text}
                    progressText={pie.text}
                    percent={pie.percent}
                  />
                );
              })}
            </ProdSubContainer>
            <ProdSubContainer>
              {PROGRESS_PIES.slice(6, 7).map(pie => {
                return (
                  <ProgressCircle
                    key={pie.text}
                    progressText={pie.text}
                    percent={pie.percent}
                  />
                );
              })}
            </ProdSubContainer>
          </ColumnContainer>
        </ColumnContainer>
      </BodyContainer>
    </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = ParallaxContainer.extend`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyContainer = RowContainer.extend`
  align-items: baseline;
`;

const SubContainer = styled.div`
  margin: 0 1rem;
`;

const ProdSubContainer = RowContainer.extend`
  margin: 0 1rem;
`;

const SubSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0.675rem 0;
`;
