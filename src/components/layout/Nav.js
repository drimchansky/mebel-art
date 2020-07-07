// packages
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
// util
import { breakpoints, colors } from '../../util/cssConfig'

const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Главная
          </Link>
        </li>
        {/* <li>
          <Link to="/services" activeClassName="active">
            Услуги
          </Link>
        </li> */}
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
  margin-top: 30px;

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    max-width: 60%;

    @media (min-width: ${breakpoints.small}) {
      display: flex;
    }
  }

  & a {
    display: block;
    text-decoration: none;
    color: ${colors.white};
    padding: 1rem 1.4rem;
    font-size: 1rem;

    @media (min-width: ${breakpoints.small}) {
      color: ${colors.black};
      padding: 1.5rem 1rem;
    }
  }

  @media (min-width: ${breakpoints.small}) {
    margin: 0;
  }
`

export default Nav