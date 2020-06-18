// packages
import React from 'react'
import styled from 'styled-components'

const Main = ({ children }) => {
  return <MainStyled>{children}</MainStyled>
}

const MainStyled = styled.main`
  flex-grow: 1;
`

export default Main
