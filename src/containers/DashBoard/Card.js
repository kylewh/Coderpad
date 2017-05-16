import React from 'react'
import styled, { keyframes }  from 'styled-components'
import styledProps from 'styled-props'
import { HoverTitle } from './HoverTitle'

const SlideInUp = keyframes`
  0% {
    opacity: 0;
    visibility: visible;
    transform: translateY(100%);
    -webkit-transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }
`

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  z-index: 10;
  width: 150px;
  &::after {
    display: none;
    transition: opacity 0.3s ease-in;
    content: '${styledProps(HoverTitle)}';
    position: absolute;
    bottom: -50px;
    width: 200px;
    left: -25px;
    text-align: center;
    font-size: 20px;
  }
  &:hover::after {
    display: block;
    -webkit-animation: 0.3s ease-in ${SlideInUp};
    animation: 0.3s ease-in ${SlideInUp};
  }
  @media all and (max-width:768px) {
    &::after {
      bottom: -35px;
      width: 200px;
    }
  }
`

export default Card
