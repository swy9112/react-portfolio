import React from 'react';
import styled from 'styled-components';
import Section from './../components/Section';


const Title = styled.h2`
  font-size: 6rem;
  font-weight: 700;
  line-height: 1.2;

  @media screen and (max-width: 1024px) {
    font-size: 3.6rem
  }
`;

const MyInfo = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 2.4rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.8rem
  }

  & > span {
    &::after {
      display: inline;
      content: 'I';
      margin: 0 10px;
    }
    &:last-child::after {
      content: '';
    }
  }
`;

const MyExplain = styled.p`
  margin-top: 30px;
`;

const MySkill = styled.div`
  display: flex;
  margin-top: 30px;

  h4 {
    margin-right: 12px;
  }
`;

function Intro() {
  return (
    <Section direction="column">
      <Title>
        Seungwoo Lee
        <br />
        Portfolio
      </Title>
      <MyInfo>
        <span>이승우</span>
        <span>1991.12.12</span>
        <span>UI 개발자</span>
      </MyInfo>
      <MyExplain>발전하는 웹 개발 기술에 뒤쳐지지 않도록 항상 공부하고 좋은 코드를 만들기 위해 노력합니다.</MyExplain>
      <MySkill>
        <h4>Skills</h4>
        <span>HTML, CSS(SASS), Responsive, React, Typescript, Storybook, Reactquery, Git</span>
      </MySkill>
    </Section>
  );
}

export default Intro;
