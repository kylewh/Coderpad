import React, { PureComponent } from 'react'
/** Tools */
import styled from 'styled-components'
/** Styled Components */
import IMG from '../styled/IMG'
import PBody from '../styled/PBody'
import Panel from '../styled/Panel'

const InfoBody = styled(PBody)`
  padding: 10px;
  & .top {
    line-height: 120%;
    padding-bottom: 8px;
  }
  & .bigger {
    font-size: 16px;
  }
  & img {
    vertical-align: middle;
  }
  & .inlineBlock {
    display: inline-block;
    text-align: center;
  }
  & .bottomBorder {
    margin: 8px -10px;
    border-bottom: 1px solid #e2e2e2;
  }
`

class UserInfo extends PureComponent {
  render () {
    return (
      <Panel>
        <InfoBody>
          <div className='top'>
            <IMG src='http://om8hmotom.bkt.clouddn.com/2017-06-03-profile.jpg' />
            <a href='#' className='bigger' style={{ marginLeft: '10px' }}>
              KYLEWH
            </a>
            <div style={{ marginTop: '10px' }}>
              <div className='inlineBlock' style={{ width: '33%' }}>
                <a href='#'>
                  <span className='bigger'>11</span>
                  <div className='sep3' />
                  <span className='fade'>节点收藏</span>
                </a>
              </div>
              <div className='inlineBlock center' style={{ width: '34%' }}>
                <a href='#'>
                  <span className='bigger'>26</span>
                  <div className='sep3' />
                  <span className='fade'>主题收藏</span>
                </a>
              </div>
              <div className='inlineBlock' style={{ width: '33%' }}>
                <a href='#'>
                  <span className='bigger'>9</span>
                  <div className='sep3' />
                  <span className='fade'>特别关注</span>
                </a>
              </div>
            </div>
            <div className='bottomBorder' />
            <div>
              <img
                src='https://www.v2ex.com/static/img/flat_compose.png'
                width='32'
              />
              <a href='#' style={{ marginLeft: '10px' }}>创作新主题</a>
            </div>
            <div className='bottomBorder' />
            <div style={{ marginBottom: '-8px' }}><a href='#'>0 条未读提醒</a></div>
          </div>
        </InfoBody>
      </Panel>
    )
  }
}

export default UserInfo
