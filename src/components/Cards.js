// packages
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
// components
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const Cards = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(sourceInstanceName: { eq: "images" }, name: { eq: "preview" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1920, quality: 100) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <CardsStyled>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item sm={12} md={6} lg={3}>
            <Card>
              <CardMedia image="/static/images/preview.jpg" title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </CardsStyled>
  )
}

const CardsStyled = styled.section``

export default Cards
