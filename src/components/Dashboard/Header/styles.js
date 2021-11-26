import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.neutral.dark};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    height: 100%;
  `}
`;

export const Profile = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.color.primary.blue};
    border-radius: 16px;
    display: flex;
    gap: 20px;
    padding: 32px 30px;

    @media(min-width: ${theme.breakpoint.desktop}) {
      align-items: start;
      flex: 1;
      flex-direction: column;
    }
  `}
`;

export const Info = styled.div``;

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

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.color.neutral.lighter};
    font-size: 16px;
    margin: 0;
  `}
`;

export const Name = styled.h1`
  ${({ theme }) => css`
    color: white;
    font-size: 24px;
    font-weight: ${theme.typography.weight.light};
    margin: 8px 0 0;
    text-transform: capitalize;

    @media(min-width: ${theme.breakpoint.desktop}) {
      width: min-content;
    }
  `}
`;

export const Menu = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.neutral.dark};
    border-radius: 0 0 16px 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 30px 0;

    @media(min-width: ${theme.breakpoint.desktop}) {
      flex-direction: column;
      justify-content: flex-start;
      padding-bottom: 0;
    }
  `}
`;

export const Title = styled.span`
  ${({ active, theme }) => css`
    color: ${active ? 'white' : theme.color.neutral.light};
    font-size: 18px;
    font-weight: ${theme.typography.weight.light};
    text-align: center;

    @media(min-width: ${theme.breakpoint.desktop}) {
      margin-bottom: 40px;
    }
  `}
`;
