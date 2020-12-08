// packages
import React from 'react'
import styled from 'styled-components'
// components
import SocialHorizontal from './social-horizontal'
import Container from '@material-ui/core/Container'
import Title from './title'

const OurSocials = ({ bgColor, titleColor }) => {
  return (
    <OurSocialsStyled bgColor={bgColor}>
      <Container maxWidth="md">
        <Title textColor={titleColor}>
          <h4>Свяжитесь с нами как вам удобно!</h4>
        </Title>
        <SocialHorizontal />
      </Container>
    </OurSocialsStyled>
  )
}

const OurSocialsStyled = styled.section`
  padding: 2rem 0 4rem;
  background: ${(props) => props.bgColor};
`

export default OurSocials
