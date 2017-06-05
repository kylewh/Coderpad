import styled, { keyframes } from 'styled-components'
import styledProps from 'styled-props'

const rubberBand = keyframes`
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  40% {
    -webkit-transform: scale3d(0.95, 1.15, 1);
            transform: scale3d(0.95, 1.15, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(.95, 1.05, 1);
            transform: scale3d(.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, .95, 1);
            transform: scale3d(1.05, .95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
`

const StyledSvg = styled.svg`
  fill: #354A5D;
  height: 150px;
  transition: all 0.3s ease-in;
  &:hover {
    -webkit-animation: 0.5s ease-in ${rubberBand};
    animation: 0.5s ease-in ${rubberBand};
  }
  & g.outline {
    fill: #354A5D;
  }
  & g.colour {
    transition: all 0.3s ease-in;
    opacity: 0;
  }
  &:hover g.colour {
    opacity: 1;
  }
`

export default StyledSvg
