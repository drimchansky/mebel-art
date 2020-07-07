// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// components
import CustomButton from '../ui/CustomButton'
// util
import { colors, breakpoints } from '../../util/cssConfig'

const HelloScreen = () => {
  return (
    <HelloScreenStyled>
      <LeftSideStyled>Left</LeftSideStyled>
      <RightSideStyled>Right</RightSideStyled>
    </HelloScreenStyled>
  )
}

const HelloScreenStyled = styled.section``

const LeftSideStyled = styled.div``

const RightSideStyled = styled.div``

export default HelloScreen
