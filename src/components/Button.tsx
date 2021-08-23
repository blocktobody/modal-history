import React from 'react';
import styled from 'styled-components';

const Container = styled.button``;

interface Props {
  onClick: () => void;
  children: string;
}

function Button({ onClick, children }: Props) {
  return <Container onClick={onClick}>{children}</Container>;
}

export default Button;
