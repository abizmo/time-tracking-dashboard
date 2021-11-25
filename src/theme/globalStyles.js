import { css, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
