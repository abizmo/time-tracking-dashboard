import React from 'react';
import { ThemeProvider } from 'styled-components';
import Dashboard from './components/Dashboard';

import theme from './theme';
import GlobalStyle from './theme/globalStyles';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Dashboard />
  </ThemeProvider>
);

export default App;
