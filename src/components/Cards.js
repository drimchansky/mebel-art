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
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "feature" } } }, limit: 4) {
        edges {
          node {
            frontmatter {
              description
              title
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const cardsData = data.allMarkdownRemark.edges

  console.log(cardsData[0].node.frontmatter.image.childImageSharp)

  return (
    <CardsStyled>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {cardsData.map((item) => {
            return (
              <Grid key={item.node.frontmatter.title} item sm={12} md={6} lg={3}>
                <CardStyled>
                  <Img fluid={item.node.frontmatter.image.childImageSharp.fluid} />
                  <h2>{item.node.frontmatter.title}</h2>
                  <p>{item.node.frontmatter.description}</p>
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
