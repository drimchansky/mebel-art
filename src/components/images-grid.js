// packages
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
// components
import Container from '@material-ui/core/Container'
import Gallery from '@browniebroke/gatsby-image-gallery'
import Title from '../components/title'
import CustomBreadcrumbs from './custom-breadcrumbs'
// utilities
import '@browniebroke/gatsby-image-gallery/dist/style.css'

export const PureImagesGrid = ({ images }) => {
  return (
    <ImagesGridStyled>
      <Container maxWidth="md">
        <CustomBreadcrumbs currentPage="Наши проекты" />
        <Title>
          <h1>Фотографии наших работ</h1>
          <span>
            Вы можете увидеть больше или загрузить свои в нашей группе{' '}
            <a href="https://vk.com/mebelart76" target="_blank" rel="noreferrer">
              ВКонтакте
            </a>
          </span>
        </Title>
        <Gallery images={images} />
      </Container>
    </ImagesGridStyled>
  )
}

export const ImagesGrid = () => {
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

  return <PureImagesGrid images={images} />
}

const ImagesGridStyled = styled.section`
  padding-bottom: 2rem;

  & img {
    cursor: pointer;
  }
`

export default ImagesGrid
