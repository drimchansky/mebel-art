// packages
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
// util
import { breakpoints, colors } from '../util/cssConfig'

const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Главная
          </Link>
        </li>
        <li>
          <Link to="/services" activeClassName="active">
            Услуги
          </Link>
        </li>
        <li>
          <Link to="/works" activeClassName="active">
            Работы
          </Link>
        </li>
        <li>
          <Link to="/reviews" activeClassName="active">
            Отзывы
          </Link>
        </li>
        <li>
          <Link to="/contacts" activeClassName="active">
            Контакты
          </Link>
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

  & a {
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.medium}) {
    margin-top: 30px;

    & a {
      color: ${(props) => (props.activeClassName ? 'red' : 'white')};
    }
  }
  @media (min-width: ${breakpoints.medium}) {
    color: red;
  }
`

export default Nav
