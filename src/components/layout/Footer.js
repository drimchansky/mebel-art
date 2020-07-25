// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// components
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// icons
import DoneIcon from '@material-ui/icons/Done'
// utils
import { colors } from '../../util/cssConfig'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGeneralInfo {
        edges {
          node {
            description
            ourOffer
          }
        }
      }
    }
  `).allContentfulGeneralInfo.edges[0].node

  return (
    <FooterStyled>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={4}>
            <TitleStyled>Адрес</TitleStyled>
            <TextStyled>Ярославль и Ярославская область</TextStyled>
            <TitleStyled marginTop="10px">Контакты</TitleStyled>
            <TextStyled>
              {data.eMail} <br />
              {data.phone}
            </TextStyled>
          </Grid>
          <Grid item md={4}>
            <TitleStyled>Почему выбирают нас?</TitleStyled>
            <ListStyled>
              <li>
                <DoneIcon fontSize="small" />
                Огромный вариант отделки
              </li>
              <li>
                <DoneIcon fontSize="small" />
                Безопасные материалы
              </li>
              <li>
                <DoneIcon fontSize="small" />
                Гарантия качества
              </li>
              <li>
                <DoneIcon fontSize="small" />
                Работаем с 2017 года
              </li>
              <li>
                <DoneIcon fontSize="small" />
                Индивидуальное производство
              </li>
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
  padding: 4rem 0;
`
const TitleStyled = styled.h4`
  margin: 0;
  margin-top: ${(props) => (props.marginTop ? '1rem' : '0')};
  color: ${colors.black};
  font-size: 1.1rem;
`

const TextStyled = styled.p`
  color: ${colors.black};
  padding: 0.2rem 0 0.5rem;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
`

const ListStyled = styled.ul`
  margin: 0;
  padding-top: 0.5rem;
  padding-left: ${(props) => (props.dotted ? '1rem' : '0')};
  list-style-type: ${(props) => (props.dotted ? 'disc' : 'none')};
  color: ${colors.black};

  & li {
    padding: 0.3rem 0;
    display: ${(props) => (props.dotted ? 'list-item' : 'flex')};

    & svg {
      margin-right: 4px;
    }

    &:first-child {
      padding-top: 0;
    }
  }
`

export default Footer
