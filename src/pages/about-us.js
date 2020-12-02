// packages
import React from 'react'
// components
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Title from '../components/title'
import Container from '@material-ui/core/Container'

export default function aboutUs() {
  return (
    <>
      <SEO title="О нас" description="Информация о компании Мебель Арт" />
      <Layout>
        <Container maxWidth="md">
          <Title>
            <h1>Информация о компании</h1>
          </Title>
        </Container>
      </Layout>
    </>
  )
}
