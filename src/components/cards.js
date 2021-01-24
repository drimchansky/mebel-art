// packages
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
// components
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Title from './title'
// utils
import { colors, shadows, breakpoints } from '../util/css-config'

const Cards = () => {

  const cardsData = useStaticQuery(graphql`
    query {
      allContentfulFeature {
        edges {
          node {
            id
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            title
            description
          }
        }
      }
    }
  `).allContentfulFeature.edges

  return (
    <SCards id="advantages">
      <Container maxWidth="lg">

        <Title>
          <h2>Наши преимущества</h2>
          <span>Работать с нами выгодно </span>
        </Title>

        <Grid container spacing={3} justify="space-around" style={{ marginTop: 50 }}>
          {cardsData.map((item) => {
            return (
              <SGridItem key={item.node.title} item sm={6} md={4}>
                <SCard>
                  <SImage fluid={item.node.image.fluid} alt={item.node.title} />
                  <SDescription>
                    <span>{item.node.title}</span>
                    <p>{item.node.description}</p>
                  </SDescription>
                </SCard>
              </SGridItem>
            )
          })}
        </Grid>
      </Container>
    </SCards>
  )
}

const SCards = styled.section`
  padding: 3rem 0 4rem;
`

const SGridItem = styled(Grid)`
  max-width: 400px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const SCard = styled.div`
  box-shadow: ${shadows.two};
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  & span {
    font-size: 1.3rem;
    color: ${colors.black};
    margin: 0.5rem 0;

    @media (min-width: ${breakpoints.medium}) {
      font-size: 1.1rem;
    }
  }
  & p {
    font-size: 0.9rem;
    margin: 0.5rem 0;
    color: ${colors.black};
    font-weight: 300;

    @media (min-width: ${breakpoints.medium}) {
      font-size: 0.8rem;
    }
  }
`
const SDescription = styled.div`
  background: ${colors.white};
  padding: 0.5rem;
  flex-grow: 1;
  border-radius: 0 0 5px 5px;
`

const SImage = styled(Img)`
  border-radius: 5px 5px 0 0;
  border-bottom: 4px solid ${colors.dark};
`

export default Cards
