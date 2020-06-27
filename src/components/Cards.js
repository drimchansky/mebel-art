// packages
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
// components
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const Cards = () => {
  const data = useStaticQuery(graphql`
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
  `)

  const cardsData = data.allContentfulFeature.edges
  console.log(cardsData)

  return (
    <CardsStyled>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {cardsData.map((item) => {
            return (
              <Grid key={item.node.title} item sm={12} md={6} lg={3}>
                <CardStyled>
                  <Img fluid={item.node.image.fluid} />
                  <h2>{item.node.title}</h2>
                  <p>{item.node.description}</p>
                </CardStyled>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </CardsStyled>
  )
}

const CardsStyled = styled.section``

const CardStyled = styled.div``

export default Cards
