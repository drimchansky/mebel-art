// packages
import React from 'react'
import styled from 'styled-components'
// components
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Container from '@material-ui/core/Container'
// utils
import { colors, breakpoints } from '../util/cssConfig'

const Header = ({ active, setActive }) => {
  return (
    <HeaderStyled>
      <ContainerStyled disableGutters>
        <Logo desctoponly="true" />
        <Nav />
      </ContainerStyled>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: ${colors.dark};

  @media (min-width: ${breakpoints.small}) {
    position: relative;
    background: ${colors.white};
    padding: 0;
  }
`
const ContainerStyled = styled(Container)`
  @media (min-width: ${breakpoints.small}) {
    /* Overwrite MaterialUI */
    display: flex !important;
    padding: 0 0.5rem !important;
    justify-content: space-between;
  }
`

export default Header
