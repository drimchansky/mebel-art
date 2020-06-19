// packages
import React from 'react'
import styled from 'styled-components'
// components
import Hamburger from '../components/Hamburger'
// utils
import { breakpoints, colors } from '../util/cssConfig'

const BodyWrapper = ({ children, active, setActive }) => {
  return (
    <BodyWrapperStyled active={active}>
      <MobileTopline>
        <Hamburger active={active} setActive={setActive} />
      </MobileTopline>
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

const MobileTopline = styled.div`
  @media (max-width: ${breakpoints.medium}) {
  }

  @media (min-width: ${breakpoints.medium}) {
    display: none;
    visibility: none;
  }
`

export default BodyWrapper
