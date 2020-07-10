// packages
import React, { Component } from 'react'
import styled from 'styled-components'
// components
import Img from 'gatsby-image'
import Slider from 'react-slick'
// utils
import { breakpoints } from '../../util/cssConfig'

export default class ImagesSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <Slider {...settings}>
        {this.props.images.map((item) => {
          return (
            <div key={item.title}>
              <ImageWrapper>
                <Img fluid={item.fluid} imgStyle={{ objectFit: 'contain' }}></Img>
              </ImageWrapper>
            </div>
          )
        })}
      </Slider>
    )
  }
}

const ImageWrapper = styled.div`
  height: 70vw;

  @media (min-width: ${breakpoints.small}) {
    height: 600px;
  }

  & > div {
    height: 100%;
    width: 100%;
  }

  & img {
    height: 100%;
    /* width: auto !important; */
  }
`
