// packages
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
// util
import { breakpoints } from '../util/cssConfig'

const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/services">Услуги</Link>
        </li>
        <li>
          <Link to="/works">Работы</Link>
        </li>
        <li>
          <Link to="/reviews">Отзывы</Link>
        </li>
        <li>
          <Link to="/contacts">Контакты</Link>
        </li>
      </ul>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  @media (max-width: ${breakpoints.medium}) {
    color: green;
  }
  @media (min-width: ${breakpoints.medium}) {
    color: red;
  }
`

export default Nav
