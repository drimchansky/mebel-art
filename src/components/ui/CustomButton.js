// packages
import React from 'react'
import styled from 'styled-components'
// components
import { Button } from 'gatsby-theme-material-ui'

const CustomButton = ({
  children,
  size,
  variant,
  bgcolor,
  textcolor,
  href,
  disableElevation,
  startIcon,
  endIcon,
  disabled,
  marginTop,
}) => {
  return (
    <ButtonStyled
      variant={variant}
      size={size}
      bgcolor={bgcolor}
      to={href}
      textcolor={textcolor}
      disableElevation={disableElevation}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      marginTop={marginTop}>
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled(Button)`
  background: ${(props) => props.bgcolor} !important;
  color: ${(props) => props.textcolor} !important;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '')} !important;
`

export default CustomButton
