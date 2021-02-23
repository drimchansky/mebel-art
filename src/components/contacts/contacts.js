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
    <SSection>
      <SContainer maxWidth="xl" disableGutters>

        <Grid container>
          <Grid item xs={12} md={7}>
            <ContactsInfo />
          </Grid>
          <Grid item md={5}>
            <ContactsBg />
          </Grid>
        </Grid>

        <ContactsForm />

      </SContainer>
    </SSection>
  )
}

const SSection = styled.section`
  background: ${colors.white};

  @media (min-width: 1200px) {
    background: ${colors.lightgray};
    padding-bottom: 14rem;
  }
`

const SContainer = styled(Container)`
  @media (min-width: 960px) {
    position: relative;
  }
`

export default Contacts
