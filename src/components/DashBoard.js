/* eslint-disable */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import styledProps from 'styled-props'
import Card from '../components/Card'
import FullScreenContainer from '../styledComponents/FullScreenContainer'
import { StyledSvg, News, Radio, Idea } from '../styledComponents/svg_icons'

const Board = styled.div`
  min-width: 320px;
  width: 70vw;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  & link-btn:hover
  &>div{
    flex-basis: 290px;
    flex-grow: 1;
  };
  @media all and (max-width:768px) {
    & {
      flex-flow: column;
      height: 85vh;
    }
    & .overlay::after {
      bottom: -35px;
      width: 200px;
    }
  }
`

const backgroundImage = {
  idea: 'http://om8hmotom.bkt.clouddn.com/card_write.jpeg',
  news: 'http://om8hmotom.bkt.clouddn.com/card_read.jpg',
  radio: 'http://om8hmotom.bkt.clouddn.com/card_music.jpeg'
}

const SecondTitle = {
  idea: '专注写作，输出灵感',
  news: '社区热点，跟踪趋势',
  radio: '放松一刻，醒神节奏' 
}

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  opacity: 0;
  height: 100%;
  transition: opacity 0.2s ease-in;
  z-index: 1;
  &::after {
    content: '${styledProps(SecondTitle)}';
    display: block;
    position: absolute;
    text-align: center;
    font-size: 20px;
    bottom: -50px;
    width: 200px;
    left: -25px;
  }
`
const NormalLink = styled(Link)`
  textdecoration: none;
  color: #354a5d;
`
class DashBoard extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <FullScreenContainer>
        <Board className='Board' >
          <NormalLink to='/write'>
            <Card>
              <Idea />
              <Overlay className='overlay' idea />
            </Card>
          </NormalLink>
          <NormalLink to='/news'>
            <Card>
              <News />
              <Overlay className='overlay' news />
            </Card>
          </NormalLink>
          <NormalLink to='/music'>
            <Card>
              <Radio />
              <Overlay className='overlay' radio />
            </Card>
          </NormalLink>
        </Board>
      </FullScreenContainer>
    )
  }
}

export default DashBoard
