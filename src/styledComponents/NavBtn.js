/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Apps from 'material-ui/svg-icons/navigation/apps'
import ContentAdd from 'material-ui/svg-icons/content/add';
/* eslint-disable */
const FlatBtn = styled( props => <FloatingActionButton {...props} />)`
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  &:hover {
    transform: scale(1.2)
  }
  &:hover button svg {
    fill: #4caf50 !important;
  }
  & button {
    background-color: rgba(0,0,0,0) !important;
  }
  & svg {
    fill: #476268 !important;
  }
  position: absolute;
  top: 20px;
  left: 20px;
`
const NavBtn = () => (
  <FlatBtn
    backgroundColor={'#FF5722'}
    mini={true}
    zDepth={0}
  >
    <Apps />
  </FlatBtn>
)

export default NavBtn
