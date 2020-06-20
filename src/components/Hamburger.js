// packages
import React from 'react'
import styled from 'styled-components'
// util
import { colors } from '../util/cssConfig'

const Hamburger = ({ active, setActive }) => {
  return (
    <HamburgerStyled
      onClick={() => setActive(!active)}
      type="button"
      aria-label="Menu"
      aria-controls="navigation">
      <HamburderBoxStyled>
        <HamburderInnerStyled></HamburderInnerStyled>
      </HamburderBoxStyled>
    </HamburgerStyled>
  )
}

const HamburgerStyled = styled.button`
  position: absolute;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  left: 10px;
`

const HamburderBoxStyled = styled.span`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
`

const HamburderInnerStyled = styled.span`
  display: block;
  top: 50%;
  margin-top: -2px;
  width: 40px;
  height: 4px;
  background-color: ${colors.darker};
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 40px;
    height: 4px;
    background-color: ${colors.darker};
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &:before {
    top: -10px;
  }

  &:after {
    bottom: -10px;
  }
`

export default Hamburger
