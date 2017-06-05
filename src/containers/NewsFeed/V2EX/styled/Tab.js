import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Tab = styled(Link)`
  display: inline-block;
  font-size: 13px;
  line-height: 13px;
  padding: 5px 8px;
  margin-right: 5px;
  border-radius: 3px;
  color: #555 !important;
  &:hover {
    background-color: #f5f5f5;
    color: #000;
    text-decoration: none;
  }
`

export default Tab
