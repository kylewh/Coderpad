import React from 'react'
import styled from 'styled-components'
import Back2Top from 'react-back2top'
import { FloatingActionButton } from 'material-ui'
import UpIcon from 'material-ui/svg-icons/navigation/arrow-upward'

const GoTopWrapper = styled(Back2Top)`
  position: fixed !important;
  bottom: 15px;
  right: 15px;
`

const GoTop = () => (
  <GoTopWrapper>
    <FloatingActionButton secondary>
      <UpIcon />
    </FloatingActionButton>
  </GoTopWrapper>
)

export default GoTop
