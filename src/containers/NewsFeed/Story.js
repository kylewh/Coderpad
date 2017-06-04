import React from 'react'
import styled from 'styled-components'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import Chip from 'material-ui/Chip'

const Wrapper = styled.li`
  list-style: none;
  flex-grow: 1;
  margin: 10px 0;
  padding: 10px 0;
  background-image: linear-gradient(to right, #fff 50%, #FAFAFA 50%);
  background-size: 200%;
  transition: all 0.3s;
  &:hover {
    background-position: -100%;
  }
`

const A = styled.a`
  &:not([type=button]) {
    color: #222;
    text-decoration: none;
  }
  &:visited {
    color: #555;
  }
`

const Header = styled.h2`
    margin: 0;
    line-height: 1.6em;
    font-size: 2.2rem;
    font-weight: 500;
    word-break: break-all;
    word-break: break-word;
    hyphens: auto;
`

const Footer = styled.footer`
    display: flex;
    flex-wrap: wrap;
    padding-top: 15px;
    line-height: 1.5em;
`

const FooterItem = styled.span`
    margin-right: 15px;
    font-size: 1.6rem;
    color: grey;
`

const Points = styled(FooterItem)`
  color: #757575;
`

const By = styled(FooterItem)`
  &, & a {
    color: #607D8B !important;
  }
  & a {
    font-weight: 500;
  }
`

const TimeStamp = styled(FooterItem)`
  color: #009688;
  margin-right: 1rem;
`

const Story = ({ story }) => {
  const { by, id, commentCount, title, points, url, ago } = story
  return (
    <Wrapper>
      <Header>
        <A
          href={url || 'https://news.ycombinator.com/item?id=' + id}
          target='_blank'
          rel='noopener noreferrer'
        >
          {title}
        </A>
      </Header>
      <Footer>
        <FooterItem>
          <By>
            By&nbsp;
            <A href={'https://news.ycombinator.com/user?id=' + by}>
              {by}
            </A>
          </By>
          <TimeStamp>{ago}</TimeStamp>
          <Points>
            {points} points{' '}
          </Points>
        </FooterItem>
        <FooterItem>
          <A
            href={'https://news.ycombinator.com/item?id=' + id}
            target='_blank'
          >
            {commentCount}
            {' '}
            {commentCount === 1 ? 'Comment' : 'Comments'}
          </A>
        </FooterItem>
      </Footer>
    </Wrapper>
  )
}

Story.propTypes = {
  story: PropTypes.object
}

export default Story
