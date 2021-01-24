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
import { generateProtocolLink } from '../util/funcs'

const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulGeneralInfo {
        edges {
          node {
            eMail
            phone
            phone_format
            where
          }
        }
      }
    }
  `).allContentfulGeneralInfo.edges[0].node

  return (
    <SFooter>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={4}>
            <STitle>Адрес</STitle>
            <SText>{data.where}</SText>
            <STitle marginTop="10px">Контакты</STitle>
            <SText>
              <a href={generateProtocolLink('email', data.eMail)}>{data.eMail}</a>
              <br />
              <a href={generateProtocolLink('phone', data.phone_format)}>{data.phone}</a>
            </SText>
            <Social />
          </Grid>

          <Grid item md={2}>
            <STitle>Навигация</STitle>
            <SList>
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
            </SList>
          </Grid>

          <Grid item md={3}>
            <STitle>Узнать больше</STitle>
            <SList>
              <li>
                <Link to="/about-company">О компании</Link>
              </li>
              <li>
                <Link to="/faq">Ответы на вопросы</Link>
              </li>
            </SList>
          </Grid>
        </Grid>
      </Container>
      <SBottom>© Все права защищены. Компания Мебель Арт 2020</SBottom>
    </SFooter>
  )
}

const SFooter = styled.footer`
  flex-shrink: 0;
  padding: 4rem 0 0 0;
`
const STitle = styled.h4`
  margin: 0;
  margin-top: ${(props) => (props.marginTop ? '1rem' : '0')};
  color: ${colors.black};
  font-size: 1.1rem;
`

const SText = styled.p`
  color: ${colors.black};
  padding: 0.2rem 0 0.5rem;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;

  & a {
    color: ${colors.dark};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

const SList = styled.ul`
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
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    &:first-child {
      padding-top: 0;
    }
  }
`

const SBottom = styled.div`
  background: ${colors.dark};
  color: ${colors.white};
  text-align: center;
  font-size: 0.7rem;
  padding: 0.3rem 0;
  margin-top: 4rem;
`

export default Footer
