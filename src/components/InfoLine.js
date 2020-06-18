// packages
import React from 'react'
import styled from 'styled-components'
// components
import Container from '@material-ui/core/Container'
import Button from '../components/CustomButton'
// util
import { colors, breakpoints } from '../util/cssConfig'

const InfoLine = () => {
  return (
    <InfoLineStyled>
      <ContainerStyled maxWidth="lg">
        <TextStyled>Кухни #1 в Ярославле и области</TextStyled>
        <PhoneStyled href="tel:89657265897">+7 (965) 726-58-97</PhoneStyled>
        <Button
          variant="contained"
          size="small"
          href="/contacts"
          bgcolor={colors.highlight}
          textcolor={colors.darker}>
          Бесплатный замер
        </Button>
      </ContainerStyled>
    </InfoLineStyled>
  )
}

const InfoLineStyled = styled.div`
  display: none;
  visibility: hidden;

  @media (min-width: ${breakpoints.medium}) {
    display: block;
    visibility: visible;
    width: 100%;
    color: ${colors.white};
    background: ${colors.dark};
    padding: 0.3rem;
  }
`
const ContainerStyled = styled(Container)`
  display: flex !important; /* Overwrite MaterialUI inline styles */
  align-items: center;
`

const TextStyled = styled.span``

const PhoneStyled = styled.a`
  color: ${colors.white};
  margin-left: auto;
  margin-right: 0.5rem;
  padding: 0.5rem;
  text-decoration: none;
`

export default InfoLine
