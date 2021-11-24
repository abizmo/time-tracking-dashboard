import { css, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.color.neutral.darker};
      margin: 0;
      padding: 0;
      font-family: ${theme.typography.family.sans};
    `}
  }
`;

export default GlobalStyle;
