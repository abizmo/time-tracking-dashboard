import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: grid;
  gap: 30px;

  @media(min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
