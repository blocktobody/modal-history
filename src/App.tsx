import React from 'react';
import styled from 'styled-components';

import Router from './router';

const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

export default function App() {
  return (
    <Container>
      <Title>history API + Modal Stack</Title>
      <Router />
    </Container>
  );
}
