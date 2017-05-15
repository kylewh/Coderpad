/* eslint-disable */
import styled from 'styled-components'
import styledProps from 'styled-props'

const backgroundImage = {
  write: 'http://om8hmotom.bkt.clouddn.com/card_write.jpeg',
  news: 'http://om8hmotom.bkt.clouddn.com/card_read.jpg',
  music: 'http://om8hmotom.bkt.clouddn.com/card_music.jpeg'
}

const cardContainer = styled.div`
  background: url(${styledProps(backgroundImage)});
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`


export default cardContainer
