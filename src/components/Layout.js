// packages
import React, { useState } from 'react'
import styled from 'styled-components'
// components
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import BodyWrapper from '../components/BodyWrapper'
import InfoLine from '../components/InfoLine'
// util
import GlobalStyle from '../util/GlobalStyle'

const Layout = ({ children }) => {
  // Mobile menu state
  const [active, setActive] = useState(false)
  console.log(active)

  return (
    <LayoutStyled active={active}>
      <GlobalStyle />
      <InfoLine />
      <Header active={active} setActive={setActive} />
      <BodyWrapper active={active} setActive={setActive}>
        <Main> {children} </Main>
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
