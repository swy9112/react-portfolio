import React from 'react';
import { InfoBox, SubTitle, InfoText, InfoExplain, InfoTitie, InfoDate } from '../components/Common';
import Section from '../components/Section';

const works = [
  {
    data: '2022.01 -',
    title: '티맥스소프트',
    text: 'UI UX 팀/UI 개발자',
    subtext: 'React + Typescript + Storybook을 활용한 제품 UI 개발 및 반응형으로 코드 리팩토링 작업을 진행하였습니다. \n또한 개발팀과의 업무 영역 분리를 위해 VAC 패턴을 적용하고 UI 개발 가이드를 제작 하였습니다.',
  },
  {
    data: '2019.04 - 2022.01',
    title: '아이뱅크',
    text: '디지털개발사업부/웹퍼블리셔',
    subtext: '코웨이, 스마트학생복, LG 하우시스 구축 프로젝트에 참여하였으며, \n 이니스프리, 나이키, 아로마티카 등 여러 사이트 운영 업무를 맡았습니다.',
  },
  {
    data: '2018.05 - 2019.03',
    title: '아이스캔디',
    text: '컨텐츠 개발팀/웹퍼블리셔',
    subtext: '디지털교과서 및 교육컨텐츠 제작에 참여하였습니다. \n짧은 시간에 많은 양의 작업을 진행하여 코딩 속도가 많이 향상되었습니다.',
  },
  {
    data: '2017.12 - 2018.04',
    title: '괜찮은마케팅',
    text: '컨텐츠 개발팀/웹퍼블리셔',
    subtext: '건강 기능 식품 쇼핑몰 마이너스그램, 휴대폰 케이스 쇼핑몰 불사조디자인 웹 및 모바일 웹사이트 제작 작업을 하였습니다.',
  },
];

function Work() {
  return (
    <Section direction="column">
      <SubTitle>Work Experience</SubTitle>
      {works.map((work, index) => (
        <InfoBox key={index}>
          <InfoDate>{work.data}</InfoDate>
          <InfoTitie>{work.title}</InfoTitie>
          <InfoText>{work.text}</InfoText>
          <InfoExplain>{work.subtext}</InfoExplain>
        </InfoBox>
      ))}
    </Section>
  );
}

export default Work;
