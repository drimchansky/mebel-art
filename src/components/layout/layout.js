// packages
import React, { useState } from 'react'
import styled from 'styled-components'
// components
import Header from './header'
import Main from './main'
import Footer from './footer'
import BodyWrapper from './body-wrapper'
import InfoLine from '../section/info-line'
// util
import GlobalStyle from '../../util/global-style'

const Layout = ({ children }) => {
  // Mobile menu state
  const [active, setActive] = useState(false)

  return (
    <LayoutStyled active={active}>
      <GlobalStyle />
      <InfoLine />
      <Header active={active} setActive={setActive} />
      <BodyWrapper active={active} setActive={setActive}>
        <Main>{children}</Main>
        <Footer />
      </BodyWrapper>
    </LayoutStyled>
  )
}

const LayoutStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: ${(props) => (props.active ? 'fixed' : 'static')};
`

export default Layout
