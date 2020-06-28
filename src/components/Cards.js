// packages
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
// components
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// utils
import { colors } from '../util/cssConfig'

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
        <Grid container spacing={2} justify="space-around">
          {cardsData.map((item) => {
            return (
              <GridItemStyled key={item.node.title} item sm={6} md={3}>
                <CardStyled>
                  <ImageStyled fluid={item.node.image.fluid} />
                  <h2>{item.node.title}</h2>
                  <p>{item.node.description}</p>
                </CardStyled>
              </GridItemStyled>
            )
          })}
        </Grid>
      </Container>
    </CardsStyled>
  )
}

const CardsStyled = styled.section`
  padding: 1.5rem 0 2rem;
`

const GridItemStyled = styled(Grid)`
  max-width: 400px;
  flex-grow: 1;
`

const CardStyled = styled.div`
  & h2 {
    font-size: 1.25rem;
    color: ${colors.accent};
    margin: 0.5rem 0;
  }
  & p {
    font-size: 0.9rem;
    margin: 0.5rem 0;
    color: ${colors.gray};
  }
`
const ImageStyled = styled(Img)`
  border-radius: 5px 5px 0 0;
  border-bottom: 4px solid ${colors.accent};
`

export default Cards
