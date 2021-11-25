import { css, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.color.neutral.darker};
      display: flex;
      flex-direction: column;
      font-family: ${theme.typography.family.sans};
      gap: 60px;
      min-height: 100vh;
      justify-content: center;
      padding: 0;
    `}
  }
`;

export default GlobalStyle;
