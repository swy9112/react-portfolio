import React from 'react';
import styled from 'styled-components';

export const SubTitle = styled.h2`
  margin-bottom: 36px;
  font-size: 2.8rem;
  font-weight: 700;
`;

const Box = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    margin-top: 10px;
  }
`;

export const InfoDate = styled.p`
  color: #b34831;
  font-size: 1.8rem;
  font-weight: 300;
`;

export const InfoTitie = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const InfoText = styled.p``;

export const InfoExplain = styled.p`
  font-weight: 300;
  line-height: 1.4;
  color: #7f7f7f;
  white-space: pre-line;
`;

export const InfoBox = ({ children }) => <Box>{children}</Box>;
