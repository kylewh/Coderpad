import styled from 'styled-components'

export const Card = styled.div`
  margin: 0 -15px;
  padding: 10px 15px;
  border-bottom: 1px solid #e2e2e2;
`

export const CardContent = styled.div`
  display: table-cell;
  vertical-align: top;
`

export const CardLeft = styled(CardContent)`
  padding-right: 10px;
`

export const IMG = styled.img`
  border: 0;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  vertical-align: middle;
`

export const CardBody = styled(CardContent)`
  width: 10000px;
  overflow: hidden;
  zoom: 1;
`

export const CardRight = styled(CardContent)`
  padding-left: 10px;
  vertical-align: middle;
`

export const TopicCardBody = styled(CardBody)`
  & .title {
    font-size: 15px;
    margin-bottom: 0;
  }
  & .info {
    color: #aba8a6;
    font-size: 12px;
    padding-top: 8px;
  }
  & .info .separator {
    padding: 0 5px;
  }
  & .info>a {
    background-color: #f5f5f5;
    font-size: 12px !important;
    line-height: 10px;
    display: inline-block;
    padding: 4px;
    border-radius: 2px;
    text-decoration: none;
    color: #999;
    margin-right: 5px;
  }
`
