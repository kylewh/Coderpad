import React from 'react'
import styled from 'styled-components'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import Chip from 'material-ui/Chip'

const LI = styled.li`
  display: flex;
  list-style: none;
  margin: 1rem 0;
  flex-shrink: 0;
  @media all and (max-width:768px) {
    flex-direction: column;
  }
`

const DescriptionWrapper = styled.div`
  box-sizing: border-box;
  width: calc(100% - 400px);
  margin-bottom: 1rem;
  @media all and (max-width:768px) {
    width: 100%;
  }
`

const Title = styled.h2`
  & a {
    font-size: 2rem;
    color: #0366d6;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 1rem;
    text-decoration: none;
  }
`

const Des = styled.p`
  color: #586069 !important;
  margin-bottom: 8px;
  line-height: 1.5;
  margin: 0;
  font-size: 1.4rem;
`

const SideWrapper = styled.div`
  display: flex;
  @media all and (max-width:768px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`

const SideItem = styled.div`
  cursor: default;
  text-align: center;
  width: 200px;
  &:hover {
    color: #009688;
  }
  @media all and (max-width:768px) {
    text-align: left;
  }
`

const Repo = ({ repo }) => {
  const { stars, url, description, language, user, name } = repo
  return (
    <LI>
      <DescriptionWrapper>
        <Title><a href={url}>{user}/{name}</a></Title>
        <Des>{description || 'No description'}</Des>
      </DescriptionWrapper>
      <SideWrapper>
        <SideItem>
          {language || 'Null'}
        </SideItem>
        <SideItem>
          ★{stars}
        </SideItem>
      </SideWrapper>
    </LI>
  )
}

Repo.propTypes = {
  repo: PropTypes.object
}

export default Repo
