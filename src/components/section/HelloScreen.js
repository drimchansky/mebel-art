// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// components
import Container from '@material-ui/core/Container'
import CustomButton from '../ui/CustomButton'
import BackgroundImage from 'gatsby-background-image'
// util
import { colors, breakpoints } from '../../util/cssConfig'

const HelloScreen = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGeneralInfo {
        edges {
          node {
            description
            ourOffer
          }
        }
      }
      file(sourceInstanceName: { eq: "images" }, name: { eq: "kitchen-art" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const generalInfo = data.allContentfulGeneralInfo.edges[0].node
  const imageData = data.file.childImageSharp.fluid

  return (
    <BackgroundImageStyled Tag="section" fluid={imageData}>
      <HelloScreenStyled>
        <Container maxWidth="xl">
          <HelloScreenWrapperStyled>
            <h1>{generalInfo.description}</h1>
            <p>{generalInfo.ourOffer}</p>
            <CustomButton
              bgcolor={colors.dark}
              textcolor={colors.white}
              size="large"
              href="/contacts"
              disableElevation>
              Свяжитесь с нами
            </CustomButton>
          </HelloScreenWrapperStyled>
        </Container>
      </HelloScreenStyled>
    </BackgroundImageStyled>
  )
}

const BackgroundImageStyled = styled(BackgroundImage)`
  &:before {
    background-repeat: no-repeat;
    background-position: right bottom !important;
    background-size: 40% !important;
  }
  &:after {
    background-repeat: no-repeat;
    background-position: right bottom !important;
    background-size: 40% !important;
  }

  @media (min-width: ${breakpoints.medium}) {
    &:before {
      background-position: right center !important;
      z-index: 1 !important;
    }
    &:after {
      background-position: right center !important;
      z-index: 1 !important;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    &:before {
      background-size: 55% !important;
    }
    &:after {
      background-size: 55% !important;
    }
  }
`

const HelloScreenStyled = styled.section`
  padding: 2rem 0;

  @media (min-width: ${breakpoints.small}) {
    padding: 2.5rem 0 3.5rem;
  }

  @media (min-width: 960px) {
    background: linear-gradient(to right, 
     ${colors.white} 60%, ${colors.lightgray} 40%);
`

const HelloScreenWrapperStyled = styled.div`
  color: ${colors.black};

  & h1 {
    max-width: 700px;
    font-size: 2rem;
    line-height: 1;

    @media (min-width: ${breakpoints.medium}) {
      font-size: 2.5rem;
    }

    @media (min-width: ${breakpoints.large}) {
      max-width: 800px;
    }
  }

  & p {
    font-size: 1rem;
    line-height: 1.2;
    margin-bottom: 2rem;

    @media (min-width: 400px) {
      max-width: 70%;
    }

    @media (min-width: ${breakpoints.small}) {
      max-width: 50%;
    }
  }
`

export default HelloScreen
