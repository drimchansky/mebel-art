// packages
import React from 'react'
import styled from 'styled-components'
// components
import Logo from './logo'
import Nav from './nav'
import Container from '@material-ui/core/Container'
// utils
import { colors, breakpoints } from '../util/css-config'

const Header = () => {
  return (
    <HeaderStyled>
      <ContainerStyled disableGutters maxWidth="xl">
        <Logo desctoponly={1} />
        <Nav />
      </ContainerStyled>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: ${colors.dark};

  @media (min-width: ${breakpoints.small}) {
    z-index: 0;
    position: relative;
    background: ${colors.white};
    padding: 0;
  }
`
const ContainerStyled = styled(Container)`
  @media (min-width: ${breakpoints.small}) {
    /* Overwrite MaterialUI */
    display: flex !important;
    padding: 0 1rem !important;
    justify-content: space-between;
  }
`

export default Header
