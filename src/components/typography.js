// libraries
import React from 'react'
import styled from 'styled-components'
// utils
import { colors } from '../util/css-config'

function createMarkup(html) {
  return { __html: html }
}

const Typography = ({ children, html }) => {
  if (html) {
    return <TypographyStyled dangerouslySetInnerHTML={createMarkup(html)} />
  } else {
    return <TypographyStyled>{children}</TypographyStyled>
  }
}

const TypographyStyled = styled.div`
  color: ${colors.black};

  & h1 {
    font-size: 1.3rem;
  }
  & h2 {
    font-size: 1.3rem;
  }
  & h3 {
    font-size: 1.3rem;
  }
  & h4 {
    font-size: 1.2rem;
  }
  & h5 {
    font-size: 1.15rem;
  }
  & h6 {
    font-size: 1rem;
  }

  & p {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`

export default Typography
