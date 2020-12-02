// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'
// components
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Social from './social'
// utils
import { colors } from '../util/css-config'
import generateProtocolLink from '../util/generate-protocol-link'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGeneralInfo {
        edges {
          node {
            eMail
            phone
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
              <a href={generateProtocolLink('email', data.phone)}>{data.eMail}</a>
              <br />
              <a href={generateProtocolLink('phone', data.phone)}>{data.phone}</a>
            </TextStyled>
            <Social />
          </Grid>

          <Grid item md={2}>
            <TitleStyled>Навигация</TitleStyled>
            <ListStyled>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/works">Работы</Link>
              </li>
              <li>
                <Link to="/reviews">Отзывы</Link>
              </li>
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
            </ListStyled>
          </Grid>
          <Grid item md={3}>
            <TitleStyled>Узнать больше</TitleStyled>
            <ListStyled>
              <li>
                <Link to="/about-us">О нас</Link>
              </li>
              <li>
                <Link to="/faq">Ответы на вопросы</Link>
              </li>
              <li>
                <Link to="/partners">Партнёры</Link>
              </li>
            </ListStyled>
          </Grid>
        </Grid>
      </Container>
      <BottomLineStyled>© Все права защищены. 2013-2020 Мебель Арт </BottomLineStyled>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  flex-shrink: 0;
  padding: 4rem 0 0 0;
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

  & a {
    color: ${colors.dark};
  }
`

const ListStyled = styled.ul`
  margin: 0;
  padding-top: 0.5rem;
  padding-left: 0;
  list-style-type: none;
  color: ${colors.black};

  & li {
    &:not(:first-child) {
      margin-top: 0.6rem;
    }

    & a {
      display: flex;
      color: ${colors.dark};
    }

    &:first-child {
      padding-top: 0;
    }
  }
`

const BottomLineStyled = styled.div`
  background: ${colors.dark};
  color: ${colors.white};
  text-align: center;
  font-size: 0.7rem;
  padding: 0.3rem 0;
  margin-top: 4rem;
`

export default Footer
