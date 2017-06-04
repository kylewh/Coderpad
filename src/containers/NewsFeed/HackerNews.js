import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { makeSelectHackerNews } from './selector'
import ContentLoader from 'react-content-loader'
import Story from './Story'
import axios from 'axios'

const UL = styled.ul`
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

class HackerNews extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.loadHackerNews()
  }

  render () {
    return (
      <UL>
        <h2>HackerNews</h2>
        {!this.props.stories.length
          ? <ContentLoader
            type='facebook'
            style={{ alignSelf: 'flex-start', width: '50vw' }}
            />
          : this.props.stories.map(story => (
            <Story story={story} key={story.id} />
            ))}
      </UL>
    )
  }
}

HackerNews.propTypes = {
  loadHackerNews: PropTypes.func,
  stories: PropTypes.array
}

const mapDispatchToProps = dispatch => ({
  loadHackerNews: () => dispatch({ type: 'LOAD_HACKERNEWS' })
})

const mapStateToProps = state => ({
  stories: makeSelectHackerNews(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(HackerNews)
