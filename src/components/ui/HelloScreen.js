// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
// components
import CustomButton from './CustomButton'
// util
import { colors, breakpoints } from '../../util/cssConfig'

const HelloScreen = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "images" }, name: { eq: "preview" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.file.childImageSharp.fluid
  return (
    <HelloScreenStyled>
      <BackgroundImageStyled Tag="div" fluid={imageData} backgroundColor={`${colors.dark}`}>
        <WrapperStyled>
          <h1>
            Ваша новая кухня <br />
            по индивидуальному дизайн-проекту
          </h1>
          <CustomButton
            bgcolor={colors.highlight}
            textcolor={colors.darker}
            size="medium"
            href="/contacts"
            disableElevation>
            Бесплатный замер и дизайн проект
          </CustomButton>
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
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.8)) repeat
    scroll 0% 0%;
  height: 100%;
  width: 100%;
  padding: 5rem 0;

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

export default HelloScreen
