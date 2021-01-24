// packages
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// utils
import { colors } from '../util/css-config'

const Main = ({ children }) => {
  return <SMain>{children}</SMain>
}

Main.propTypes = {
  children: PropTypes.node
}

const SMain = styled.main`
  background: ${colors.lightgray};
  flex: 1 0 auto;
`

export default Main
