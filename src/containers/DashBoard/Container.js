import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0 10vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > div{
    flex-basis: 290px;
    flex-grow: 1;
  };
  @media all and (max-width:768px) {
    & {
      flex-flow: column;
      padding: 10vh 0;
    }
  }
`

export default Container
