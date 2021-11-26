import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import { Container } from './style';
import activities from '../../../fixtures/activities';

const timeframes = {
  daily: 'day',
  weekly: 'week',
  monthly: 'month',
};

const Cards = ({ timeframe }) => (
  <Container>
    {
      activities.map((activity) => (
        <Card
          current={activity.timeframes[timeframe].current}
          previous={activity.timeframes[timeframe].previous}
          timeframe={timeframes[timeframe]}
          title={activity.title}
        />
      ))
    }
  </Container>
);

Cards.propTypes = {
  timeframe: PropTypes.string.isRequired,
};

export default Cards;
