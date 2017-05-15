import styled from 'styled-components'

const Wrapper = styled.div`
  flex-basis: 55vw;
  & .preview-toggle {
    display: none;
  }
  & .markdown {
    min-height: 500px;
    width: 100%;
    margin-top: 15vh;
    padding: 0;
    font-size: 20px;
    background-color: transparent;
    color: #424242;
    font-family: 'Inconsolata', monospace;
    line-height: 1.5;
  }
`

export default Wrapper
