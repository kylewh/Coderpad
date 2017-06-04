import styled from 'styled-components'

const PBody = styled.div`
  padding: 0 15px;
  &:before {
    display: table;
    content: " ";
  }
  &:after {
    clear: both;
  }
`

export default PBody
