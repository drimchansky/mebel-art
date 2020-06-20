// packages
import React from 'react'
import styled from 'styled-components'
// components
import Hamburger from '../components/Hamburger'
import Logo from '../components/Logo'
// utils
import { breakpoints, colors } from '../util/cssConfig'

const BodyWrapper = ({ children, active, setActive }) => {
  return (
    <BodyWrapperStyled active={active}>
      <MobileHeader>
        <Hamburger active={active} setActive={setActive} />
        <Logo />
      </MobileHeader>
      {children}
    </BodyWrapperStyled>
  )
}
const BodyWrapperStyled = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  z-index: 2;
  overflow-x: hidden;

  @media (max-width: ${breakpoints.small}) {
    transform: ${(props) => (props.active ? 'translate(60%, 3%)' : 'none')};
    /* position: relative; */
    transition: all 320ms;
  }
  @media (min-width: ${breakpoints.medium}) {
  }
`

const MobileHeader = styled.header`
  @media (max-width: ${breakpoints.medium}) {
    position: relative;
    padding: 0.9rem 1.2rem;
    text-align: center;
  }

  @media (min-width: ${breakpoints.medium}) {
    display: none;
    visibility: none;
  }
`

export default BodyWrapper
