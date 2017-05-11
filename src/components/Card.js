/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
/** styled-components */



const CardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  z-index: 10;
  width: 150px;
`


const Card = (props) => (
  <CardContainer {...props} className={'card'} >

  </CardContainer>
)

export default Card
