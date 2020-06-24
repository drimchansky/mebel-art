// packages
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
// components
import CustomButton from '../components/CustomButton'
// util
import { colors, breakpoints } from '../util/cssConfig'

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
  console.log(data)

  const imageData = data.file.childImageSharp.fluid
  return (
    <HelloScreenStyled>
      <BackgroundImageStyled Tag="div" fluid={imageData}>
        <WrapperStyled>
          <h1>
            Ваша кухня по индивидуальному
            <br />
            дизайн-проекту
          </h1>
          <CustomButton
            bgcolor={colors.highlight}
            textcolor={colors.darker}
            size="medium"
            href="/contacts">
            Бесплатный замер и дизайн проект
          </CustomButton>
        </WrapperStyled>
      </BackgroundImageStyled>
    </HelloScreenStyled>
  )
}

const HelloScreenStyled = styled.section`
  height: 300px;

  @media (min-width: ${breakpoints.small}) {
    height: 450px;
  }
`
const BackgroundImageStyled = styled(BackgroundImage)`
  height: 100%;
`
const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;

  & h1 {
    color: ${colors.white};
    text-align: center;
    font-size: 2rem;
    max-width: 800px;
  }
`

export default HelloScreen
