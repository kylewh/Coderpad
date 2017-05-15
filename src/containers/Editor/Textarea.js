import React from 'react'
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'

const AutoSizeTextarea = styled(Textarea)`
  outline: none;
  border: none;
  resize: none;
  & ul, & ol {
    list-style: initial;
  }
`

export default AutoSizeTextarea
