import styled, { css } from 'styled-components';

import { ReactComponent as IconEllipsis } from './icon-ellipsis.svg';

export const Container = styled.div`
  ${({ type, theme }) => css`
    background-color: ${theme.color.neutral.dark};
    border-radius: 16px;
    color: white;
    display: grid;
    grid-template-rows: auto;
    margin-top: 38px;
    padding: 30px 24px;
    position: relative;

    &::before{
      height: 60px;
      width: 100%;
      content: ' ';
      background-color: ${theme.color.primary[type]};
      background-image: url('./images/icon-${type}.svg');
      background-size: 26%;
      background-position: 92% 40%;
      background-repeat: no-repeat;
      border-radius: 16px 16px 0 0;
      position: absolute;
      top: -38px;
      z-index: -1;
    }

    @media(min-width: ${theme.breakpoint.desktop}){
      margin-top: 45px;
      padding: 34px 30px;

      &::before{
        top: -45px;
      }

      &:hover{
        background-color: ${theme.color.neutral.light};
        cursor: pointer;
      }
    }
  `}
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  @media(min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-bottom: 24px;
  }
`;

export const Stats = styled(Header)`
  margin-bottom: 0;
  
  @media(min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    align-items: start;
    flex-direction: column;
    justify-content: center;
  }
`;

export const More = styled(IconEllipsis)`
  &:hover {
    cursor: pointer;
    & path{
      fill: white;
    }
  }
`;

export const Small = styled.small`
  font-size: 15px;
  text-transform: capitalize;
  ${({ theme }) => css`
    color: ${theme.color.neutral.lighter};
    font-weight: ${theme.typography.weight.normal};
  `}
`;

export const Stat = styled.p`
  font-size: 32px;
  margin: 0 0 8px;
  ${({ theme }) => css`
    font-weight: ${theme.typography.weight.light};

    @media(min-width: ${theme.breakpoint.desktop}) {
      font-size: 56px;
    }
  `}
`;

export const Title = styled.p`
  margin: 0;
  ${({ theme }) => css`
    font-size: ${theme.typography.size.body};
    font-weight: ${theme.typography.weight.bold};
  `}
`;
