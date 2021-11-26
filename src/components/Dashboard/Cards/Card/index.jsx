import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
${({ type, theme }) => css`
  background-color: ${theme.color.neutral.dark};
  border-radius: 16px;
  color: white;
  display: grid;
  grid-template-rows: auto auto;
  margin-top: 38px;
  padding: 32px 24px;
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
`}
`;

const Header = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    @media(min-width: ${theme.breakpoint.desktop}) {
    }
  `}
`;

const Stats = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;

    @media(min-width: ${theme.breakpoint.desktop}) {
    }
  `}
`;

const Title = styled.p`
  font-size: 18px;
  margin: 0;
`;

const Stat = styled.p`
  ${({ theme }) => css`
    font-size: 30px;
    font-weight: ${theme.typography.weight.light};
    margin: 0;

    @media(min-width: ${theme.breakpoint.desktop}) {
      font-size: 52px;
    }
  `}
`;

const More = styled.img.attrs({
  alt: 'More',
  src: './images/icon-ellipsis.svg',
})`
  height: 4px;
`;

const Small = styled.small`
  ${({ theme }) => css`
    color: ${theme.color.neutral.lighter};
    font-size: 14px;
    font-weight: ${theme.typography.weight.light};
    text-transform: capitalize;

    @media(min-width: ${theme.breakpoint.desktop}) {
      font-size: 14px;
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
