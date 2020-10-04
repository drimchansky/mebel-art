// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// components
import Container from '@material-ui/core/Container'
import { Button } from 'gatsby-theme-material-ui'
import BackgroundImage from 'gatsby-background-image'
// util
import { colors, breakpoints } from '../../util/css-config'

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
        <Container maxWidth="lg">
          <HelloScreenWrapperStyled>
            <h1>
              Лучшие <span>кухни</span>
              <br />
              для лучших <span>людей</span>
            </h1>
            {/* <h1>{generalInfo.description}</h1> */}
            <p>{generalInfo.ourOffer}</p>
            <ButtonsWrapper>
              <ButtonStyled href="/contacts" disableElevation>
                Свяжитесь с нами
              </ButtonStyled>
              <ButtonMoreStyled variant="outlined" href="#" disableElevation>
                Узнать больше
              </ButtonMoreStyled>
            </ButtonsWrapper>
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
      background-size: 45% !important;
      background-position: 90% center !important;
    }
    &:after {
      background-size: 45% !important;
      background-position: 90% center !important;
    }
  }
`

const ButtonsWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.small}) {
    flex-direction: row;
  } ;
`

const ButtonStyled = styled(Button)`
  padding: 0.5rem 1rem !important;
  background: ${colors.dark} !important;
  color: ${colors.white} !important;

  @media (min-width: ${breakpoints.small}) {
    padding: 0.5rem 2rem !important;
  }
`

const ButtonMoreStyled = styled(Button)`
  padding: 0.5rem 0.5rem !important;
  border: 3px ${colors.accent} solid !important;
  color: ${colors.accent} !important;
  margin-top: 0.5rem !important;

  @media (min-width: ${breakpoints.small}) {
    padding: 0.5rem 1rem !important;
    margin-top: 0 !important;
    margin-left: 0.5rem !important;
  }
`

const HelloScreenStyled = styled.section`
  padding: 2rem 0;

  @media (min-width: ${breakpoints.small}) {
    padding: 2.5rem 0 3.5rem;
  }

  @media (min-width: 960px) {
    background: linear-gradient(to right, ${colors.white} 68%, ${colors.lightgray} 32%);
  }
`

const HelloScreenWrapperStyled = styled.div`
  color: ${colors.black};
  z-index: 2;
  position: relative;

  & h1 {
    max-width: 620px;
    font-size: 1.7rem;
    font-weight: 800;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin: 0;

    & span {
      font-weight: 800;
      letter-spacing: initial;
    }

    @media (min-width: ${breakpoints.medium}) {
      font-size: 2.5rem;
      line-height: 0.9;
    }

    @media (min-width: 1600px) {
      max-width: 1000px;
    }
  }

  & p {
    font-size: 1rem;
    line-height: 1.3;
    margin: 2rem 0;

    @media (min-width: 400px) {
      max-width: 70%;
    }

    @media (min-width: ${breakpoints.small}) {
      max-width: 65%;
    }

    @media (min-width: ${breakpoints.large}) {
      max-width: 50%;
    }
  }
`

export default HelloScreen
