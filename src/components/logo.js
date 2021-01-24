// packages
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// util
import { colors } from '../util/css-config'

const Logo = ({ desctoponly }) => {

  return (
    <SLogo desctoponly={desctoponly} to="/">
      Мебель<span>Арт</span>
    </SLogo>
  )
}

Logo.propTypes = {
  desctoponly: PropTypes.number,
}

const SLogo = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 300;
  color: ${colors.dark};
  font-size: 1.3rem;
  letter-spacing: -1px;

  & span {
    font-weight: 800;
    margin-left: 2px;
    color: ${colors.accent};
  }

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
