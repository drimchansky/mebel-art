// packages
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
// components
import Container from '@material-ui/core/Container'
import ImagesSlider from '../ui/ImagesSlider'

const ImagesGrid = () => {
  const images = useStaticQuery(graphql`
    query {
      allContentfulGallery {
        edges {
          node {
            images {
              id
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `).allContentfulGallery.edges[0].node.images

  return (
    <ImagesGridStyled>
      <Container maxWidth="md">gallery</Container>
    </ImagesGridStyled>
  )
}

const ImagesGridStyled = styled.section`
  padding: 2rem 0;
`

export default ImagesGrid
