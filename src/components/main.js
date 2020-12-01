// packages
import React from 'react'
import styled from 'styled-components'
// utils
import { colors } from '../util/css-config'

const Main = ({ children }) => {
  return <MainStyled>{children}</MainStyled>
}

const MainStyled = styled.main`
  background: ${colors.lightgray};
  flex: 1 0 auto;
`

export default Main
