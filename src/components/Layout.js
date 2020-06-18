// packages
import React from 'react'
import styled from 'styled-components'
// util
import GlobalStyle from '../util/GlobalStyle'

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <GlobalStyle />
      {children}
    </LayoutStyled>
  )
}

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default Layout
