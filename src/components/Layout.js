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
`

export default Layout
