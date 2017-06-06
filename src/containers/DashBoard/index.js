import React, { PureComponent } from 'react'
/** Child Components */
import { IdeaSVG, RadioSVG, NewsSVG } from './SvgIcons/'
/** Styled Components */
import Card from './styled/Card'
import Container from './styled/Container'
import NormalLink from './styled/NormalLink'

class DashBoard extends PureComponent {
  render () {
    return (
      <Container className='Board'>
        <NormalLink to='/write'>
          <Card idea className='card'>
            <IdeaSVG />
          </Card>
        </NormalLink>
        <NormalLink to='/news'>
          <Card news>
            <NewsSVG />
          </Card>
        </NormalLink>
        <NormalLink to='/music'>
          <Card radio>
            <RadioSVG />
          </Card>
        </NormalLink>
      </Container>
    )
  }
}

export default DashBoard
