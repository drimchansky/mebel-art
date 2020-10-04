// packages
import React from 'react'
import styled from 'styled-components'
// components
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '../typography'
// utils
// import { colors } from '../../util/css-config'

const Greetings = () => {
  return (
    <ContainerStyled maxWidth="lg">
      <Grid container>
        <Grid item md={9}>
          <Typography>
            <h3>Приветствуем на нашем сайте!</h3>
            <p>
              Рады предложить вам кухни, как собственного производства по индивидуальному
              дизайн-проекту, шкафы-купе и гардеробные любой сложности и наполнения, так и продукцию
              зарекомендовавших себя мебельных фабрик - "ЯРОФФ", "БЕЛЬМАРКО" они производят
              высококачественную детскую и подростковую мебель.{' '}
            </p>
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </ContainerStyled>
  )
}

const ContainerStyled = styled(Container)`
  padding-bottom: 4rem;
`

export default Greetings
