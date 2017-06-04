import React from 'react'
import styled from 'styled-components'
import IMG from './styled/IMG'
import { Card, CardLeft, CardBody } from './styled/Cards'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const HotItem = styled(Card)`
  padding: 10px;
  overflow: hidden;
  zoom: 1;
`

const SmallImg = styled(IMG)`
  width: 24px;
  height: 24px;
`

const HotItemBody = styled(CardBody)`
 & a.title {
  font-size: 13px;
  line-height: 120%;
  margin-bottom: 0;
 }
`

const HotTopic = ({ hotTopic }) => {
  const { id, member, title } = hotTopic
  return (
    <HotItem>
      <CardLeft>
        <span style={{ display: 'table-cell', verticalAlign: 'middle' }}>
          <SmallImg src={member.avatar_large} role='presentation' />
        </span>
      </CardLeft>
      <HotItemBody>
        <Link className='title' to={`/t/${id}`}>
          {title}
        </Link>
      </HotItemBody>
    </HotItem>
  )
}

HotTopic.propTypes = {
  hotTopic: PropTypes.object
}

export default HotTopic
