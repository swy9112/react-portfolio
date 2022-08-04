import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  visibility: hidden;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: all 0.3s;
`;

const Wrap = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  max-height: 80vh;
  padding: 60px 40px;
  background-color: #fff;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c9c9c9;
    border-radius: 4px;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  margin-bottom: 34px;
  border: 1px solid #eee;

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    border: 10px solid #fff;
    box-sizing: border-box;
    content: '';
  }
`;

const Image = styled.img`
  flex: 0 0 auto;
  width: 100%;

  box-sizing: border-box;
`;

const Explain = styled.p``;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const LinkBtn = styled.button`
  padding: 6px 12px;
  border: 1px solid #ccc;
  color: #323232;
`;

function Modal({ isModal, modalOff, portfolios, selected }) {
  const modalBg = useRef();
  const modalArea = useRef();
  let now = portfolios[selected];
  useEffect(() => {
    if (isModal) {
      modalBg.current.style.visibility = 'visible';
      modalBg.current.style.opacity = 1;
    } else {
      modalBg.current.style.opacity = 0;
      modalBg.current.style.visibility = 'hidden';
    }
  }, [isModal]);

  const onClose = (e) => {
    if (modalBg.current === e.target) {
      modalOff();
      modalArea.current.scrollTop = 0;
    }
  };

  const onLocation = (e, now) => {
    if (e.target.innerText === 'View') {
      window.open(now.url);
    } else {
      window.open(now.git);
    }
  };

  return (
    <Background ref={modalBg} onClick={(e) => onClose(e)}>
      <Wrap ref={modalArea}>
        <>
          {now.image.map((image, index) => {
            return (
              <ImageWrap>
                <Image key={index} src={require(`../assets/screen/${image}.png`)} />
              </ImageWrap>
            );
          })}
          <Explain>{now.explain}</Explain>
          <BtnWrap>
            {now.url && <LinkBtn onClick={(e) => onLocation(e, now)}>View</LinkBtn>}
            {now.git && <LinkBtn onClick={(e) => onLocation(e, now)}>Git</LinkBtn>}
          </BtnWrap>
        </>
      </Wrap>
    </Background>
  );
}

export default Modal;
