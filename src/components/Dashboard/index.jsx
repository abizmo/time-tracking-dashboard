import React, { useState } from 'react';

import Cards from './Cards';
import Header from './Header';
import { Container } from './style';

const img = './images/image-jeremy.png';
const name = 'Jeremy Robson';

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
