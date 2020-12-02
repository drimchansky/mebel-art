// packages
import React from 'react'
import styled from 'styled-components'
// utils
import { colors } from '../util/css-config'

const Title = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>
}

const TitleStyled = styled.div`
  color: ${colors.black};
  text-align: center;
  margin: 1rem 0 2rem 0;

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0;
  }

  & span {
    display: block;
    font-size: 1rem;
    font-weight: 300;
    margin-top: 0.5rem;
  }

  & a {
    color: ${colors.dark};
  }
`

export default Title
