// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
// components
// import Button from '@material-ui/core/Button'
import { Button } from 'gatsby-theme-material-ui'
// util
import { colors, breakpoints } from '../util/css-config'

const HelloScreen = () => {
  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      desktopImage: file(sourceInstanceName: { eq: "images" }, name: { eq: "kitchen-02" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobileImage: file(sourceInstanceName: { eq: "images" }, name: { eq: "image-bg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 600px)`,
    },
  ]

  return (
    <HelloScreenStyled>
      <BackgroundImageStyled Tag="div" fluid={sources}>
        <WrapperStyled>
          <h1>
            Кухни по индивидуальному <br />
            дизайн-проекту в Ярославле
          </h1>
          <ButtonsWrapper>
            <ButtonStyled to="/contacts#contact-form" disableElevation>
              Связаться с нами
            </ButtonStyled>
            <ButtonMoreStyled variant="outlined" href="#advantages" disableElevation>
              Узнать больше
            </ButtonMoreStyled>
          </ButtonsWrapper>
        </WrapperStyled>
      </BackgroundImageStyled>
    </HelloScreenStyled>
  )
}

const HelloScreenStyled = styled.section``

const BackgroundImageStyled = styled(BackgroundImage)`
  height: 100%;
`
const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)) repeat scroll
    0% 0%;
  height: 100%;
  width: 100%;
  padding: 7rem 0;

  & h1 {
    color: ${colors.white};
    text-shadow: rgba(0, 0, 0, 0.15) 0px 2px 2px;
    margin-top: 0;
    text-align: center;
    font-size: 1.8rem;
    max-width: 1060px;

    @media (min-width: ${breakpoints.small}) {
      font-size: 2rem;
    }
  }

  @media (min-width: ${breakpoints.medium}) {
    padding: 6rem 0;
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
  padding: 1rem 3.5rem !important;
  background: ${colors.dark} !important;
  color: ${colors.white} !important;

  @media (min-width: ${breakpoints.small}) {
    padding: 0.5rem 2rem !important;
  }
`

const ButtonMoreStyled = styled(Button)`
  padding: 0.5rem 0.5rem !important;
  border: 3px ${colors.white} solid !important;
  color: ${colors.white} !important;
  margin-top: 0.8rem !important;

  @media (min-width: ${breakpoints.small}) {
    padding: 0.5rem 1rem !important;
    margin-top: 0 !important;
    margin-left: 0.5rem !important;
  }
`

export default HelloScreen
