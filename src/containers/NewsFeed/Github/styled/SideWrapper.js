import styled from 'styled-components'

const SideWrapper = styled.div`
  display: flex;
  @media all and (max-width:768px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`

export default SideWrapper
