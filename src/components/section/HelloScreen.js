// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// components
import Container from '@material-ui/core/Container'
import CustomButton from '../ui/CustomButton'
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
    }
  `).allContentfulGeneralInfo.edges[0].node

  return (
    <HelloScreenStyled>
      <Container maxWidth="xl">
        <LeftSideStyled>
          <h1>{data.description}</h1>
          <p>{data.ourOffer}</p>
          <CustomButton
            bgcolor={colors.dark}
            textcolor={colors.white}
            size="medium"
            href="/contacts"
            disableElevation>
            Свяжитесь с нами
          </CustomButton>
        </LeftSideStyled>
        <RightSideStyled>Right</RightSideStyled>
      </Container>
    </HelloScreenStyled>
  )
}

const HelloScreenStyled = styled.section`
  padding: 2rem 0 2rem;

  @media (max-width: ${breakpoints.medium}) {
    background-image: url('./images/kitchen-art.png');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 40%;
  }
`

const LeftSideStyled = styled.div`
  color: ${colors.black};

  & h1 {
    font-size: 2rem;
    line-height: 1;
  }

  & p {
    font-size: 1rem;
    line-height: 1.2;
    margin-bottom: 2rem;

    @media (min-width: 400px) {
      max-width: 75%;
    }

    @media (min-width: 600px) {
      max-width: 67%;
    }
  }
`

const RightSideStyled = styled.div`
  display: none;
  visibility: none;
`

export default HelloScreen
