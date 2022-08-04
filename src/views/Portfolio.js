import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../components/Common';
import Section from '../components/Section';

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  align-items: center;
  width: 100%;
`;

const Item = styled.button`
  position: relative;
  border: 1px solid #ccc;
`;

const Image = styled.img`
  width: 100%;
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 18px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

function Portfolio({ modalOff, portfolios, getIndex }) {
  const onModalEvnet = (portfolio, index) => {
    modalOff();
    getIndex(index);
  };
  return (
    <Section direction="column">
      <SubTitle>Portfolio</SubTitle>
      <Wrap>
        {portfolios.map((portfolio, index) => {
          if (portfolio.name !== 'Portfolio') {
            return (
              <Item key={index} onClick={() => onModalEvnet(portfolio, index)}>
                <Image src={require(`../assets/${portfolio.thumbnail}.jpg`)} />
                <Text>{portfolio.name}</Text>
              </Item>
            );
          } else {
            return (
              <Item key={index} onClick={() => window.open(portfolio.git)}>
                <Image src={require(`../assets/${portfolio.thumbnail}.jpg`)} />
                <Text>{portfolio.name}</Text>
              </Item>
            );
          }
        })}
      </Wrap>
    </Section>
  );
}

export default Portfolio;
