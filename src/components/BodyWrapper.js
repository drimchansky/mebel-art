// packages
import React from 'react'
import styled from 'styled-components'

const BodyWrapper = ({ children }) => {
  return <BodyWrapperStyled>{children}</BodyWrapperStyled>
}

const BodyWrapperStyled = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export default BodyWrapper
