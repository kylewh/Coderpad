/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Apps from 'material-ui/svg-icons/navigation/apps'
import ContentAdd from 'material-ui/svg-icons/content/add';
/* eslint-disable */
const FlatBtn = styled.div`
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  &:hover {
    transform: scale(1.2)
  }
  &:hover svg {
    fill: #43a047 !important;
  }
  & svg {
    fill: #476268 !important;
  }
  position: absolute;
  top: 20px;
  left: 20px;
  height: 24px;
  width: 24px;
  z-index: 999;
  cursor: pointer;
`
const NavBtn = () => (
  <FlatBtn>
    <Apps />
  </FlatBtn>
)

export default NavBtn
