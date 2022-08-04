import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import GlobalStyle from './GlobalStyle';
import Intro from './views/Intro';
import Work from './views/Work';
import Portfolio from './views/Portfolio';
import Modal from './components/Modal';
import { portfolios } from './data';
import Education from './views/Education';

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 0 40px;
  box-sizing: border-box;
`;

function App() {
  //팝업
  const [isModal, setIsModal] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '8px';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = 0;
    }
  }, [isModal]);

  const modalOff = () => {
    setIsModal(!isModal);
  };

  const getIndex = (idx) => {
    setSelected(idx);
  };

  return (
    <>
      <Reset />
      <GlobalStyle />
      <Container>
        <Intro />
        <Work />
        <Portfolio modalOff={modalOff} portfolios={portfolios} getIndex={getIndex} />
        <Education />
      </Container>
      <Modal isModal={isModal} modalOff={modalOff} portfolios={portfolios} selected={selected} />
    </>
  );
}

export default App;
