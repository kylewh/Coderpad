import styled from 'styled-components'

const A = styled.a`
  &:not([type=button]) {
    color: #222;
    text-decoration: none;
  }
  &:visited {
    color: #555;
  }
`

export default A
