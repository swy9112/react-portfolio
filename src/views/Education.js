import React from 'react';
import { InfoBox, SubTitle, InfoTitie, InfoDate } from '../components/Common';
import Section from '../components/Section';

const works = [
  {
    data: '2019.07 -',
    title: 'React Study',
  },
  {
    data: '2017.04 - 2019.03',
    title: 'JavaScript Study',
  },
  {
    data: '2018.04 - 2018.06',
    title: 'JavaScript ES6 Study',
  },
  {
    data: '2017.04 - 2017.09',
    title: 'UX/UI 디자인(디지털앱, 웹퍼블리셔)과정',
  },
];

function Education() {
  return (
    <Section direction="column">
      <SubTitle>Education</SubTitle>
      {works.map((work, index) => (
        <InfoBox key={index}>
          <InfoDate>{work.data}</InfoDate>
          <InfoTitie>{work.title}</InfoTitie>
        </InfoBox>
      ))}
    </Section>
  );
}

export default Education;
