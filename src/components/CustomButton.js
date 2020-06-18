// packages
import React from 'react'
import styled from 'styled-components'
// components
import { Button } from 'gatsby-theme-material-ui'

const CustomButton = ({ children, size, variant, bgcolor, textcolor, href }) => {
  return (
    <ButtonStyled variant={variant} size={size} bgcolor={bgcolor} to={href} textcolor={textcolor}>
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled(Button)`
  background: ${(props) => props.bgcolor} !important;
  color: ${(props) => props.textcolor} !important;
`

export default CustomButton
