// packages
import React from 'react'
import styled from 'styled-components'
// components
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Container from '@material-ui/core/Container'
// utils
import { colors } from '../util/cssConfig'

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
`
const ContainerStyled = styled(Container)``

export default Header
