/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import styledProps from 'styled-props'
/** styled-components */

const backgroundImage = {
  write: 'http://om8hmotom.bkt.clouddn.com/card_write.jpeg',
  news: 'http://om8hmotom.bkt.clouddn.com/card_read.jpg',
  music: 'http://om8hmotom.bkt.clouddn.com/card_music.jpeg'
}

const CardContainer = styled.div`
  background: url(${styledProps(backgroundImage)});
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  opacity: 0;
  height: 100%;
  transition: opacity 0.5s ease-in;
  background: rgba(0, 0, 0, 0.2);
  &:hover {
    display: flex;
    opacity: 1;
  }
`
const Card = (props) => (
  <CardContainer {...props} className={'card'} >
  </CardContainer>
)

export default Card
