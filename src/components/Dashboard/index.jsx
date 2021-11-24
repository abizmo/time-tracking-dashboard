import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const img = './images/image-jeremy.png';
const name = 'Jeremy Robson';

const Container = styled.div`
  display: grid;
  gap: 24px;
  margin: 0 auto;
  max-width: 327px;

  @media(min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    gap: 30px;
    grid-template-columns: 1fr 3fr;
    max-width: 1110px;
  }
`;

const Cards = styled.div`
  background-color: orange;
  height: 600px;
  width: 100%;
`;

const Dashboard = () => (
  <Container>
    <Header img={img} name={name} />
    <Cards />
  </Container>
);

export default Dashboard;
