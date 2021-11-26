import styled, { css } from 'styled-components';

export const Avatar = styled.img`
  border: 3px solid white;
  border-radius: 50%;
  height: 70px;
  width: 70px;

  @media(min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    height: 84px;
    width: 84px;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.neutral.dark};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Menu = styled.div`
  border-radius: 0 0 16px 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 34px 0;
  ${({ theme }) => css`
    background-color: ${theme.color.neutral.dark};

    @media(min-width: ${theme.breakpoint.desktop}) {
      grid-template-columns: auto;
      grid-template-rows: repeat(3, 1fr);
      padding-left: 36px;
    }
  `}
`;

export const Name = styled.h1`
  color: white;
  font-size: 24px;
  margin: 8px 0 0;
  text-transform: capitalize;
  ${({ theme }) => css`
    font-weight: ${theme.typography.weight.light};

    @media(min-width: ${theme.breakpoint.desktop}) {
      font-size: 40px;
      width: min-content;
    }
  `}
`;

export const Profile = styled.div`
  align-items: center;
  border-radius: 16px;
  display: flex;
  gap: 16px;
  padding: 34px 30px;
  ${({ theme }) => css`
    background-color: ${theme.color.primary.blue};

    @media(min-width: ${theme.breakpoint.desktop}) {
      align-items: start;
      flex: 1;
      flex-direction: column;
      gap: 40px;
      padding-bottom: 88px;
    }
  `}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.neutral.lighter};
  font-size: 15px;
  margin: 0;
`;

export const Title = styled.span`
  font-size: 18px;
  text-align: center;
  ${({ active, theme }) => css`
    color: ${active ? 'white' : theme.color.neutral.light};

    @media(min-width: ${theme.breakpoint.desktop}) {
      cursor: pointer;
      margin-bottom: 20px;
      text-align: left;
      width: fit-content;
    }
  `}

  &:hover{
    color: white;
  }
`;
