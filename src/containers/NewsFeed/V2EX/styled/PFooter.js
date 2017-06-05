import styled from 'styled-components'

const PFooter = styled.div`
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  & .pf {
    font-size: 11px;
    line-height: 12px;
    color: #333;
    display: inline-block;
    padding: 3px 10px;
    text-shadow: 0 1px 0 #fff;
  }
  & .pf, & .pf:hover {
    text-decoration: none;
    border-radius: 15px;
  }
`

export default PFooter
