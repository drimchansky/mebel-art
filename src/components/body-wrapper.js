// packages
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// components
import Hamburger from './hamburger'
import Logo from './logo'
// utils
import { breakpoints, colors, shadows } from '../util/css-config'

const BodyWrapper = ({ children, active, setActive }) => {

  return (
    <SBodyWrapper active={active}>

      <MobileHeader>
        <Hamburger active={active} setActive={setActive} />
        <Logo />
      </MobileHeader>

      {children}

    </SBodyWrapper>
  )
}

BodyWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  active: PropTypes.bool,
  setActive: PropTypes.func
}

const SBodyWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  z-index: 2;
  overflow: hidden;
  transform: ${(props) => (props.active ? 'translate(60%, 3%)' : 'none')};
  border-radius: ${(props) => (props.active ? '7px' : 'none')};
  transition: all 320ms;
  box-shadow: ${shadows.four};

  @media (min-width: ${breakpoints.medium}) {
  }
`

const MobileHeader = styled.header`
  position: relative;
  padding: 0.9rem 1.2rem;
  text-align: center;

  @media (min-width: ${breakpoints.small}) {
    display: none;
    visibility: hidden;
  }
`

export default BodyWrapper
