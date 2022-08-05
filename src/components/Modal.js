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
  overflow-x: hidden;
  overflow-y: auto;
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

  @media screen and (max-width: 1024px) {
    width: 80%;
    height: 600px;
    padding: 20px;
    box-sizing: border-box;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: ${({ size = 100 }) => size}%;
  margin-bottom: 34px;
  border: 1px solid #eee;

  @media screen and (max-width: 1024px) {
    margin-bottom: 10px
  }

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

const Explain = styled.p`
  line-height: 1.2;
  font-weight: 300;
  text-align: center;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const LinkBtn = styled.button`
  margin: 0 8px;
  padding: 6px 12px;
  border: 1px solid #ccc;
  font-size: 14px;
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
      setTimeout(() => {
        modalArea.current.scrollTop = 0;
      }, 400);
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
            if (now.name === 'MovieApp') {
              return (
                <ImageWrap key={index} size="80">
                  <Image src={require(`../assets/screen/${image}.png`)} />
                </ImageWrap>
              );
            } else {
              return (
                <ImageWrap key={index}>
                  <Image src={require(`../assets/screen/${image}.png`)} />
                </ImageWrap>
              );
            }
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
