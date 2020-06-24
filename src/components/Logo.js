// packages
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
// util
import { colors } from '../util/cssConfig'

const Logo = ({ desctoponly }) => {
  return (
    <LogoStyled desctoponly={desctoponly} to="/">
      Мебель Арт
    </LogoStyled>
  )
}

const LogoStyled = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: ${colors.dark};
  font-size: 1.3rem;
  letter-spacing: -1px;

  ${(props) => {
    if (props.desctoponly) {
      return `
      display: none;
      visibility: hidden;
        @media(min-width: 600px) {
          display: flex;
          align-items: center;
          justify-content: center;
          visibility: visible;
        }
      `
    }
  }};
`

export default Logo
