import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  background: white;
  padding-top: 56px;
  & .clearfix:after {
    clear: both;
    display: table;
    content: " ";
  }
`

export default Container
