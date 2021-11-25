import React, { useState } from 'react';
import styled from 'styled-components';

import Cards from './Cards';
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

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState('daily');

  const handleChangeTimeframe = (tf) => setTimeframe(tf);

  return (
    <Container>
      <Header
        img={img}
        name={name}
        onClick={handleChangeTimeframe}
        timeframe={timeframe}
      />
      <Cards timeframe={timeframe} />
    </Container>
  );
};

export default Dashboard;
