/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { StyledSvg, News, Radio, Idea } from '../styledComponents/svg_icons'

const BoardCt= styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  postion: relative;
`

const BgOverLay = styled(BoardCt)`
  background-image: url('http://om8hmotom.bkt.clouddn.com/read.jpg');
  background-position: center;
  background-size: cover;
  opacity: 0.3;
  position: absolute;
`
const Board = styled.div`
  min-width: 320px;
  width: 70vw;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  & link-btn:hover
  &>div{
    flex-basis: 290px;
    flex-grow: 1;
  };
  @media all and (max-width:768px) {
    & {
      flex-flow: column;
      height: 80vh;
    }
  }
`

class DashBoard extends Component {
  componentDidMount () {
    
  }

  render () {
    return (
      <Board className='Board' >
        <Card >
          <Idea />
        </Card>
        <Card >
          <News />
        </Card>
        <Card>
          <Radio />
        </Card>
      </Board>
    )
  }
}

export default DashBoard
