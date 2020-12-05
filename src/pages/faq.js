// packages
import React from 'react'
// components
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Title from '../components/title'
import OurSocials from '../components/our-socials'
import Container from '@material-ui/core/Container'
import Questions from '../components/questions'
// utils
import { colors } from '../util/css-config'

export default function faq() {
  return (
    <>
      <SEO title="Ответы на вопросы" description="Ответы на часто задаваемые вопросы" />
      <Layout>
        <Container maxWidth="md" style={{ paddingBottom: 50 }}>
          <Title>
            <h1>Часто задаваемые вопросы</h1>
          </Title>
          <Questions />
        </Container>
        <OurSocials bgColor={colors.medium} titleColor={colors.black} />
      </Layout>
    </>
  )
}
