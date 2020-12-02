// packages
import React from 'react'
// components
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Title from '../components/title'
import Container from '@material-ui/core/Container'

export default function faq() {
  return (
    <>
      <SEO title="Ответы на вопросы" description="Ответы на часто задаваемые вопросы" />
      <Layout>
        <Container maxWidth="md">
          <Title>
            <h1>Часто задаваемые вопросы</h1>
          </Title>
        </Container>
      </Layout>
    </>
  )
}
