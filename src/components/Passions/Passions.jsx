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
          {PASSIONS.map(p => {
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

const PASSIONS = [
  {
    icon: 'graduation-cap',
    passion: 'learn',
    text:
      'I find nothing more enjoyable than being a better person than I was the day before. I live to learn everything the world has to offer and from every person I meet.'
  },
  {
    icon: 'heartbeat',
    passion: 'exercise',
    text:
      'I love to start my days with a physical challenge. As I gravitate toward bodyweight exercises, I plan to achieve 30 consecutive pull-ups and a headstand by the end of the year.'
  },
  {
    icon: 'lightbulb-o',
    passion: 'strategize',
    text:
      'I enjoy researching current tech events — new products, features, companies, technologies, etc. — and thinking about how best to improve their chances at success.'
  },
  {
    icon: 'code',
    passion: 'develop',
    text:
      'It thrills me to create robust and well-designed websites and applications that solve real-world needs. When I get started on a technical project, nothing can stop me from finishing.'
  },
  {
    icon: 'pencil',
    passion: 'write',
    text:
      'Writing helps me relieve my stress, process my thoughts, and track my self-growth. I write within a wide range — technology, my professional career, college, my personal life, and more.'
  },
  {
    icon: 'heart',
    passion: 'teach',
    text:
      'In the end, we’re all human. I would love to see every one of us healthy, successful, and happy. The best way I can do that is by sharing my experiences so that other can be better people.'
  }
];
