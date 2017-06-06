import styled from 'styled-components'

const LI = styled.li`
  display: flex;
  list-style: none;
  margin: 1rem 0;
  flex-shrink: 0;
  @media all and (max-width:768px) {
    flex-direction: column;
  }
`

export default LI
