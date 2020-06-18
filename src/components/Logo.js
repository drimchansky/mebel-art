// packages
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Logo = ({ desctoponly }) => {
  return (
    <LogoStyled desctoponly={desctoponly} to="/">
      Мебель Арт
    </LogoStyled>
  )
}

const LogoStyled = styled(Link)`
  ${(props) => {
    if (props.desctoponly) {
      return `
      display: none;
      visibility: none;
        @media(min-width: 600px) {
          display: block;
          visibility: visible;
        }
      `
    }
  }}
`

export default Logo
