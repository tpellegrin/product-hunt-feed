import React from 'react'
import styled, { keyframes } from 'styled-components'

import { Colors } from './Themes';

interface Props {
  color: string;
  size: string;
  sizeUnit: string;
}

const motion = (p: Props) => keyframes`
  0% {
      transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
`

const Ring = styled.div<Props>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${p => `${p.size}${p.sizeUnit}`};
  height: ${p => `${p.size}${p.sizeUnit}`};
  margin: 6px;
  border: 6px solid ${p => p.color};
  border-radius: 50%;
  animation: ${p => motion(p)} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${p => p.color} transparent transparent transparent;

  :nth-child(1) {
    animation-delay: -0.45s;
  }

  :nth-child(2) {
    animation-delay: -0.3s;
  }

  :nth-child(3) {
    animation-delay: -0.15s;
  }
`

const Spinner = (p: Props) => (
  <Wrapper>
    <Ring color={p.color} size={p.size} sizeUnit={p.sizeUnit} />
  </Wrapper>
)

Spinner.defaultProps = {
  size: 50,
  color: Colors.Orange,
  sizeUnit: 'px'
}

export default Spinner;
