// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// components
import Container from '@material-ui/core/Container'
import { Link } from 'gatsby'
// util
import { colors, breakpoints } from '../util/css-config'
import generateProtocolLink from '../util/generate-protocol-link'

const InfoLine = () => {
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
    <InfoLineStyled>
      <ContainerStyled maxWidth="xl">
        <LinksList>
          <li>
            <Link to="#">Акции</Link>
            <Link to="#">О нас</Link>
            <Link to="#">Ответы на вопросы</Link>
            <Link to="#">Партнёры</Link>
          </li>
        </LinksList>
        <PhoneStyled href={generateProtocolLink('phone', data.phone)}>{data.phone}</PhoneStyled>
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
  }
`
const ContainerStyled = styled(Container)`
  display: flex !important; /* Overwrite MaterialUI inline styles */
  align-items: center;
`

const LinksList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;

  & li {
    display: flex;
  }

  & a {
    font-size: 0.7rem;
    height: 100%;
    text-decoration: none;
    color: ${colors.white};
    display: block;
    transition: opacity 0.1s ease;

    &:not(:first-child) {
      margin-left: 10px;
    }

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }

  & a:not(:forst-child) {
    margin-left: 0.3rem;
  }
`

const PhoneStyled = styled.a`
  color: ${colors.white};
  font-size: 0.7rem;
  margin-left: auto;
  margin-right: 0.5rem;
  padding: 0.5rem;
  text-decoration: none;
  transition: opacity 0.1s ease;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`

export default InfoLine
