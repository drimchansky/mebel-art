// packages
import React from 'react'
import styled from 'styled-components'
// components
import Title from './title'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// utils
import { colors, breakpoints } from '../util/css-config'
// icons
import {
  DesignIcon,
  MeasureIcon,
  ContractIcon,
  ManufactureIcon,
  DeliveryIcon,
  HappinessIcon,
} from '../util/svg-components'

const WorkSteps = () => {
  return (
    <WorkStepsStyled>
      <Container maxWidth="xl">
        <Title textColor={colors.white}>
          <h3>Порядок работы</h3>
        </Title>

        <Grid container spacing={4} style={{ marginTop: 70 }}>
          <Grid item xs={12} sm={6} md={2}>
            <CardStyled>
              <MeasureIcon />
              <span>Замер</span>
              <p>Наши замерщики приедут в удобное для Вас время</p>
            </CardStyled>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <CardStyled>
              <DesignIcon />
              <span>Дизайн-проект</span>
              <p>Дизайнер создаст дизайн-проект учитывая все Ваши пожелания</p>
            </CardStyled>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <CardStyled>
              <ContractIcon />
              <span>Договор</span>
              <p>Прописываем все условия и сроки, оформляем предоплату</p>
            </CardStyled>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <CardStyled>
              <ManufactureIcon />
              <span>Производство</span>
              <p>После заключения договора дизайн-проект отправляется на фабрику</p>
            </CardStyled>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <CardStyled>
              <DeliveryIcon />
              <span>Доставка и сборка</span>
              <p>Доставим кухню в удобное для вас время, соберем и подключим технику</p>
            </CardStyled>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <CardStyled>
              <HappinessIcon />
              <span>Готово</span>
              <p>Вы радуетесь новой кухне!</p>
            </CardStyled>
          </Grid>
        </Grid>
      </Container>
    </WorkStepsStyled>
  )
}

const WorkStepsStyled = styled.section`
  background: ${colors.dark};
  padding: 3rem 0 4rem;
`

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${colors.lightgray};

  & span {
    margin-top: 1rem;
    font-size: 1.3rem;

    @media (min-width: ${breakpoints.medium}) {
      font-size: 1.1rem;
    }
  }

  & p {
    font-weight: 300;
    font-size: 1.1rem;

    @media (min-width: ${breakpoints.medium}) {
      font-size: 0.8rem;
    }
  }

  & svg {
    height: 40%;
    width: 40%;
    fill: ${colors.lightgray};
  }
`

export default WorkSteps
