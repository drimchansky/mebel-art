// packages
import React from 'react'
import styled from 'styled-components'
// components
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// utils
import { colors } from '../util/cssConfig'

const Footer = () => {
  return (
    <FooterStyled>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={4}>
            <TitleStyled>Адрес</TitleStyled>
            <TextStyled>Ярославль и Ярославская область</TextStyled>
            <TitleStyled>Контакты</TitleStyled>
            <TextStyled>
              example@gmail.com <br />
              +7 (965) 726-58-97
            </TextStyled>
          </Grid>
          <Grid item md={4}>
            <TitleStyled>Почему выбирают нас?</TitleStyled>
            <ListStyled>
              <li>Огромный вариант отделки</li>
              <li>Безопасные материалы</li>
              <li>Гарантия качества</li>
              <li>Работаем с 2017 года</li>
              <li>Индивидуальное производство</li>
            </ListStyled>
          </Grid>
          <Grid item md={4}>
            <TitleStyled>Услуги</TitleStyled>
            <ListStyled dotted>
              <li>Произведение замера</li>
              <li>Проектирование кухни</li>
              <li>Доставка и установка</li>
            </ListStyled>
          </Grid>
        </Grid>
      </Container>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  border-bottom: 8px solid ${colors.dark};
  flex-shrink: 0;
`
const TitleStyled = styled.h4``

const TextStyled = styled.p``

const ListStyled = styled.ul``

export default Footer
