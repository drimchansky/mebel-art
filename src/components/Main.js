// packages
import React from 'react'
import styled from 'styled-components'

const Main = ({ children }) => {
  return <MainStyled>{children}</MainStyled>
}

const MainStyled = styled.main`
  flex: 1 0 auto;
`

export default Main
