// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';

// Local Components
import PassionCard from './PassionCard.jsx';

// Stylesheets
import { generalStyles } from '../../stylesheets/general_stylesheet.js';

export default class Passions extends React.Component {
  render() {
    return (
      <div
        className={css(
          styles.passionsContainer,
          generalStyles.columnContainer,
          generalStyles.fadeIn
        )}
      >
        <h2 className={css(generalStyles.header)}>What I Love To Do</h2>
        <div className={css(styles.passionCardContainer)}>
          {passions.map(p => {
            return (
              <PassionCard
                key={p.passion}
                icon={p.icon}
                passion={p.passion}
                text={p.text}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  passionsContainer: {
    minHeight: 'calc(100vh - 108px)'
  },

  passionCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexFlow: 'wrap',
    maxWidth: '1000px',
    margin: 'auto'
  }
});

const passions = [
  {
    icon: 'graduation-cap',
    passion: 'learn',
    text:
      'I find nothing more enjoyable than making myself a better person. I live to learn everything the world has to offer.'
  },
  {
    icon: 'heartbeat',
    passion: 'exercise',
    text:
      "I love to challenge myself physically. I will do 50 consecutive pullups and run a half marathon by the year's end."
  },
  {
    icon: 'lightbulb-o',
    passion: 'strategize',
    text:
      'I enjoy just sitting down, reading product strategy, and applying these lessons to improve products and companies.'
  },
  {
    icon: 'code',
    passion: 'develop',
    text:
      'Coding is one of my favorite pastimes. I love to learn new front-end languages to create websites and applications.'
  },
  {
    icon: 'pencil',
    passion: 'write',
    text:
      'I journal to clear my head, relieve my stress, and track my self-growth. It is one of my most important habits.'
  },
  {
    icon: 'heart',
    passion: 'teach',
    text:
      "I've learned from others, and I strive to share my experiences. I plan to teach a design class in the fall semester."
  }
];
