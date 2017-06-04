import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const LINK = styled(NavLink)`
  &.btn-active{
    background-color: #f5f5f5;
  }
  & button {
    transition: all 0.2s ease-in-out !important;
  }
  &.btn-active button {
    transform: scale(1.3)
  }
`

export default LINK
