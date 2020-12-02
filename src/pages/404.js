// packages
import React from 'react'
// components
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Title from '../components/title'
import Container from '@material-ui/core/Container'

export default function noFound() {
  return (
    <>
      <SEO title="404" description="Страницы не существует" />
      <Layout>
        <Container maxWidth="md">
          <Title>
            <h1>Страницы не существует</h1>
            <span>Нам жаль, но судя по всему страница была удалена или вы ошиблись адресом</span>
          </Title>
        </Container>
      </Layout>
    </>
  )
}
