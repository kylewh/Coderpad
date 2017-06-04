import styled from 'styled-components'

const Panel = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 3px rgba(0,0,0,.1);
  font-size: 12px;
  &:after {
    clear:both;
  }
  & a, & a:link {
    color: #778087;
    word-break: break-all;
    text-decoration: none;
  }
  & a:not(.tab):hover {
    text-decoration: underline;
  }
`

export default Panel
