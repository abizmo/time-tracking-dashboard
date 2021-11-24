import React from 'react';
import PropTypes from 'prop-types';

import {
  Avatar, Container, Info, Menu, Name, Profile, Text, Title,
} from './styles';

const Header = ({ img, name }) => (
  <Container>
    <Profile>
      <Avatar alt="profile" src={img} />
      <Info>
        <Text>Report for</Text>
        <Name>{name}</Name>
      </Info>
    </Profile>
    <Menu>
      <Title>Daily</Title>
      <Title active>Weekly</Title>
      <Title>Monthly</Title>
    </Menu>
  </Container>
);

Header.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Header;
