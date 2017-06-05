import styled from 'styled-components'

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  & *, & {
    box-sizing: border-box;
  }
  &:before {
    display: table;
    content: " ";
  }
  &.clearfix:after {
    clear" both;
  }
  @media all and (min-width: 768px)  {
    width: 750px;
  }
  @media all and (min-width: 992px) {
    width: 970px;
  }
  @media all and (min-width: 1200px) {
    width: 1170px;
  }
`

export default Container
