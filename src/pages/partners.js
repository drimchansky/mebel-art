// packages
import React from 'react'
// components
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Title from '../components/title'
import Container from '@material-ui/core/Container'

export default function partners() {
  return (
    <>
      <SEO title="Наши партнёры" description="Наши партнёры" />
      <Layout>
        <Container maxWidth="md">
          <Title>
            <h1>Партнёры нашей компании</h1>
          </Title>
        </Container>
      </Layout>
    </>
  )
}
