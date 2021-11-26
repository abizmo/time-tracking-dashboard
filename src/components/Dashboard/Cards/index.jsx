import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import { Container } from './style';

const cards = [{
  title: 'Work',
  timeframes: {
    daily: {
      current: 5,
      previous: 7,
    },
    weekly: {
      current: 32,
      previous: 36,
    },
    monthly: {
      current: 103,
      previous: 128,
    },
  },
},
{
  title: 'Play',
  timeframes: {
    daily: {
      current: 1,
      previous: 2,
    },
    weekly: {
      current: 10,
      previous: 8,
    },
    monthly: {
      current: 23,
      previous: 29,
    },
  },
},
{
  title: 'Study',
  timeframes: {
    daily: {
      current: 0,
      previous: 1,
    },
    weekly: {
      current: 4,
      previous: 7,
    },
    monthly: {
      current: 13,
      previous: 19,
    },
  },
},
{
  title: 'Exercise',
  timeframes: {
    daily: {
      current: 1,
      previous: 1,
    },
    weekly: {
      current: 4,
      previous: 5,
    },
    monthly: {
      current: 11,
      previous: 18,
    },
  },
},
{
  title: 'Social',
  timeframes: {
    daily: {
      current: 1,
      previous: 3,
    },
    weekly: {
      current: 5,
      previous: 10,
    },
    monthly: {
      current: 21,
      previous: 23,
    },
  },
},
{
  title: 'Self Care',
  timeframes: {
    daily: {
      current: 0,
      previous: 1,
    },
    weekly: {
      current: 2,
      previous: 2,
    },
    monthly: {
      current: 7,
      previous: 11,
    },
  },
}];

const timeframes = {
  daily: 'day',
  weekly: 'week',
  monthly: 'month',
};

const Cards = ({ timeframe }) => (
  <Container>
    {
      cards.map((card) => (
        <Card
          current={card.timeframes[timeframe].current}
          previous={card.timeframes[timeframe].previous}
          timeframe={timeframes[timeframe]}
          title={card.title}
        />
      ))
    }
  </Container>
);

Cards.propTypes = {
  timeframe: PropTypes.string.isRequired,
};

export default Cards;
