// libraries
import React from 'react'
import styled from 'styled-components'
import { Grid, Container } from '@material-ui/core'
// components
import ContactsForm from './contacts-form'
import ContactsInfo from './contacts-info'
import ContactsBg from './contacts-bg'
// utils
import { colors } from '../../util/css-config'

const Contacts = () => {
  return (
    <SectionStyled>
      <ContainerStyled maxWidth="xl" disableGutters>
        <Grid container>
          <Grid item xs={12} md={7}>
            <ContactsInfo />
          </Grid>
          <Grid item md={5}>
            <ContactsBg />
          </Grid>
        </Grid>
        <ContactsForm />
      </ContainerStyled>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  background: ${colors.white};

  @media (min-width: 1200px) {
    background: linear-gradient(0deg, ${colors.dark} 35%, ${colors.lightgray} 0);
    padding-bottom: 10rem;
  }
`

const ContainerStyled = styled(Container)`
  @media (min-width: 960px) {
    position: relative;
  }
`

export default Contacts
