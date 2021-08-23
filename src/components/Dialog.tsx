import React, { ReactNode, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import useModalHistory from '../modules/useModalHistory';

const Container = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  width: 100vw;
  height: 100vh;
  background-color: white;
  font-family: sans-serif;
`;

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border: 1px solid black;
`;

const Title = styled.h3`
  text-align: center;
  margin: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: calc(50% - 10px);
  left: 20px;
`;

const Content = styled.div`
  padding: 20px;
  border: 1px solid black;
  margin-top: -1px;
`;

interface Props {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  modalKey?: string;
  title: string;
  children: ReactNode;
}

function Dialog({ isOpen, setOpen, modalKey = '', title, children }: Props) {
  const portalContainer =
    document.getElementById('dialog-root') ?? document.body;

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useModalHistory(modalKey, isOpen, handleClose);

  return createPortal(
    <Container isOpen={isOpen}>
      <TitleContainer>
        <CloseButton onClick={handleClose}>X</CloseButton>
        <Title>{title}</Title>
      </TitleContainer>
      <Content>{children}</Content>
    </Container>,
    portalContainer,
  );
}

export default Dialog;
