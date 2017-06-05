import styled from 'styled-components'
import { Paper } from 'material-ui'

const HeaderConatiner = styled(Paper)`
  position: fixed !important;
  top: 0 !important;
  width: 100% !important;
  border: 0 none !important;
  overflow: hidden !important;
  z-index: 1000;
  &>div {
    display: flex !important;
    justify-content: space-around !important;
  }
  & button {
    height: 100%;
  }
`

export default HeaderConatiner
