// packages
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// utils
import { colors } from '../util/css-config'

const Title = ({ children, textColor, alignment }) => {
  return (
    <TitleStyled textColor={textColor} alignment={alignment}>
      {children}
    </TitleStyled>
  )
}

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  textColor: PropTypes.string,
  alignment: PropTypes.string,
}

const TitleStyled = styled.div`
  color: ${(props) => props.textColor || colors.black};
  text-align: ${(props) => props.alignment || 'center'};
  margin: 1.5rem 0;

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.7rem;
    font-weight: 300;
    margin: 0;
  }

  & span {
    display: block;
    font-size: 1.1rem;
    font-weight: 300;
    margin-top: 0.5rem;
  }

  & a {
    color: ${colors.dark};
  }
`

export default Title
