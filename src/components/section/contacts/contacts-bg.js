// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// components
import BackgroundImage from 'gatsby-background-image'
// utils
import { colors } from '../../../util/css-config'

const ContactsBg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "images" }, name: { eq: "kitchen-vertical" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.file.childImageSharp.fluid
  return (
    <BG Tag="section" fluid={imageData} backgroundColor={`${colors.dark}`}>
      <Overflow />
    </BG>
  )
}

const BG = styled(BackgroundImage)`
  display: none;

  @media (min-width: 960px) {
    display: block;
    background: #000;
    height: 100%;
    height: 1000px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
`

const Overflow = styled.div`
  mix-blend-mode: multiply;
  height: 100%;
  width: 100%;
  background: ${colors.black};
  opacity: 0.5;
`

export default ContactsBg
