import PropTypes from 'prop-types';
import React from 'react';

import toKebabCase from '../../../../helpers/toKebabCase';

import {
  Container, Header, More, Small, Stat, Stats, Title,
} from './style';

const Card = ({
  current, previous, timeframe, title,
}) => {
  const textTimeframe = timeframe === 'day' ? 'yesterday' : `last ${timeframe}`;

  return (
    <Container type={toKebabCase(title)}>
      <Header>
        <Title>{title}</Title>
        <More />
      </Header>
      <Stats>
        <Stat>{`${current}hrs`}</Stat>
        <Small>{`${textTimeframe} - ${previous}hrs`}</Small>
      </Stats>
    </Container>
  );
};

Card.propTypes = {
  current: PropTypes.number.isRequired,
  previous: PropTypes.number.isRequired,
  timeframe: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
