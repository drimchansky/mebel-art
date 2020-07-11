// packages
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
// components
import Typography from '../../Typography'
// utils
import { colors, shadows, breakpoints } from '../../../util/cssConfig'

const ReviewItem = ({ name, date, html }) => {
  return (
    <ReviewItemStyled>
      <NameStyled>{name}</NameStyled>
      <DateStyled>{date}</DateStyled>
      <Typography html={html}></Typography>
    </ReviewItemStyled>
  )
}

const ReviewItemStyled = styled.li`
  display: flex;
  flex-direction: column;
`
const NameStyled = styled.div``

const DateStyled = styled.span``

export default ReviewItem
