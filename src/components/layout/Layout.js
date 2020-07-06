// packages
import React, { useState } from 'react'
import styled from 'styled-components'
// components
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import BodyWrapper from './BodyWrapper'
import InfoLine from '../ui/InfoLine'
// util
import GlobalStyle from '../../util/GlobalStyle'

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
