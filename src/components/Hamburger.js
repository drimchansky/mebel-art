import React from 'react'
import styled from 'styled-components'

const Hamburger = ({ active, setActive }) => {
  return <HamburgerStyled onClick={() => setActive(!active)}></HamburgerStyled>
}

const HamburgerStyled = styled.button`
  height: 20px;
  width: 20px;
`

export default Hamburger
