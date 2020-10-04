// packages
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
// components
import Container from '@material-ui/core/Container'
import Gallery from '@browniebroke/gatsby-image-gallery'
// utilities
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const ImagesGrid = () => {
  const images = useStaticQuery(graphql`
    query {
      allContentfulGallery {
        edges {
          node {
            images {
              id
              thumb: fluid(maxWidth: 270, maxHeight: 270) {
                ...GatsbyContentfulFluid
              }
              full: fluid(maxWidth: 1024) {
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
      <Container maxWidth="md">
        <Gallery images={images} />
      </Container>
    </ImagesGridStyled>
  )
}

const ImagesGridStyled = styled.section`
  padding: 2rem 0;
`

export default ImagesGrid
