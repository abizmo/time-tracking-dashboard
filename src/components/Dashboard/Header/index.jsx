import React from 'react';
import PropTypes from 'prop-types';

import {
  Avatar, Container, Info, Menu, Name, Profile, Text, Title,
} from './styles';

const Header = ({
  img, name, onClick, timeframe,
}) => (
  <Container>
    <Profile>
      <Avatar alt="profile" src={img} />
      <Info>
        <Text>Report for</Text>
        <Name>{name}</Name>
      </Info>
    </Profile>
    <Menu>
      <Title
        active={timeframe === 'daily'}
        onClick={() => onClick('daily')}
      >
        Daily
      </Title>
      <Title
        active={timeframe === 'weekly'}
        onClick={() => onClick('weekly')}
      >
        Weekly
      </Title>
      <Title
        active={timeframe === 'monthly'}
        onClick={() => onClick('monthly')}
      >
        Monthly
      </Title>
    </Menu>
  </Container>
);

Header.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  timeframe: PropTypes.string.isRequired,
};

export default Header;
