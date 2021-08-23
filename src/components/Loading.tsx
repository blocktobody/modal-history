import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.6);
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

function Loading() {
  return (
    <Container>
      <Text />
    </Container>
  );
}

export default Loading;
