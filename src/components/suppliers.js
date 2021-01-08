// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import SwiperCore, { Autoplay } from 'swiper'
// utils
import { colors } from '../util/css-config'
// components
import Title from './title'
import Img from 'gatsby-image'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/swiper.scss'

const Suppliers = () => {
  SwiperCore.use([Autoplay])

  const suppliersData = useStaticQuery(graphql`
    query {
      allContentfulSupplier {
        edges {
          node {
            id
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            url
          }
        }
      }
    }
  `).allContentfulSupplier.edges

  return (
    <SuppliersStyled>
      <Title textColor={colors.lightgray}>
        <h5>Наши поставщики</h5>
      </Title>
      <Swiper
        style={{ paddingLeft: 18, paddingRight: 18 }}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          960: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}>
        {suppliersData.map((item) => {
          return (
            <SwiperSlide key={item.node.id}>
              <WrapperLinkStyled href={item.node.url}>
                <ImageStyled fluid={item.node.image.fluid} alt="Компания поставщик" />
              </WrapperLinkStyled>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </SuppliersStyled>
  )
}

const SuppliersStyled = styled.section`
  background: ${colors.dark};
  padding: 1.5rem 0 2.5rem;
`

const WrapperLinkStyled = styled.a`
  position: relative;
  padding-bottom: 33.33%;
`

const ImageStyled = styled(Img)`
  position: absolute;
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 5px;
`

export default Suppliers
