import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
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
