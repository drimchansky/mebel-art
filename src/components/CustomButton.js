// packages
import React from 'react'
import styled from 'styled-components'
// components
import { Button } from 'gatsby-theme-material-ui'

const CustomButton = ({ children, size, variant, color, href }) => {
  return (
    <ButtonStyled variant={variant} size={size} color={color} href={href}>
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled(Button)`
  background: ${(props) => props.color} !important;
`

export default CustomButton
