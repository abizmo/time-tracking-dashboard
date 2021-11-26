import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as IconEllipsis } from './icon-ellipsis.svg';

const Container = styled.div`
${({ type, theme }) => css`
  background-color: ${theme.color.neutral.dark};
  border-radius: 16px;
  color: white;
  display: grid;
  grid-template-rows: auto auto;
  margin-top: 38px;
  padding: 30px 24px;
  position:relative;

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
    }
  }
`}
`;

const Header = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    @media(min-width: ${theme.breakpoint.desktop}) {
      margin-bottom: 24px;
    }
  `}
`;

const Stats = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;

    @media(min-width: ${theme.breakpoint.desktop}) {
      align-items: start;
      flex-direction: column;
      justify-content: center;
    }
  `}
`;

const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.typography.size.body};
    font-weight: ${theme.typography.weight.bold};
    margin: 0;
  `}
`;

const Stat = styled.p`
  ${({ theme }) => css`
    font-size: 32px;
    font-weight: ${theme.typography.weight.light};
    margin: 0 0 8px;

    @media(min-width: ${theme.breakpoint.desktop}) {
      font-size: 56px;
    }
  `}
`;

const More = styled(IconEllipsis)`
  &:hover {
    cursor: pointer;
    & path{
      fill: white;
    }
  }
`;

const Small = styled.small`
  ${({ theme }) => css`
    color: ${theme.color.neutral.lighter};
    font-size: 15px;
    font-weight: ${theme.typography.weight.normal};
    text-transform: capitalize;

    @media(min-width: ${theme.breakpoint.desktop}) {
    }
  `}
`;

const toKebabCase = (str) => str.replace(/\s+/g, '-').toLowerCase();

const Card = ({
  current, previous, timeframe, title,
}) => (
  <Container type={toKebabCase(title)}>
    <Header>
      <Title>{title}</Title>
      <More />
    </Header>
    <Stats>
      <Stat>{`${current}hrs`}</Stat>
      <Small>{`Last ${timeframe} - ${previous}hrs`}</Small>
    </Stats>
  </Container>
);

Card.propTypes = {
  current: PropTypes.number.isRequired,
  previous: PropTypes.number.isRequired,
  timeframe: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
