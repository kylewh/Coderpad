import styled from 'styled-components'

const SideItem = styled.div`
  cursor: default;
  text-align: center;
  width: 200px;
  &:hover {
    color: #009688;
  }
  @media all and (max-width:768px) {
    text-align: left;
  }
`

export default SideItem
