/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './Card'
import { IdeaSVG, RadioSVG, NewsSVG } from './SvgIcons/'
import NormalLink from '../../components/NormalLink'
import Container from './Container'

class DashBoard extends Component {
  render () {
    return (
      <Container className='Board' >
        <NormalLink to='/write'>
          <Card idea className='card'>
            <IdeaSVG/>
          </Card>
        </NormalLink>
        <NormalLink to='/news'>
          <Card news >
            <NewsSVG/>
          </Card>
        </NormalLink>
        <NormalLink to='/music'>
          <Card radio>
            <RadioSVG/>
          </Card>
        </NormalLink>
      </Container>
    )
  }
}

export default DashBoard
