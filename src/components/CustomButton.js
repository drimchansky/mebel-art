// packages
import React from 'react'
import styled from 'styled-components'
// components
import { Button } from 'gatsby-theme-material-ui'

const CustomButton = ({ children, size, variant, bgColor, textColor, href }) => {
  return (
    <ButtonStyled variant={variant} size={size} bgColor={bgColor} to={href} textColor={textColor}>
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled(Button)`
  background: ${(props) => props.bgColor} !important;
  color: ${(props) => props.textColor} !important;
`

export default CustomButton
