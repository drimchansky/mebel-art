// packages
import React from 'react'
// components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import BodyWrapper from '../components/BodyWrapper'

export default function Home() {
  return (
    <>
      <SEO title="Наши проекты" description="Примеры выполненных работ" />
      <Layout>
        <Header />
        <BodyWrapper>
          <Main>Страница с работами</Main>
          <Footer />
        </BodyWrapper>
      </Layout>
    </>
  )
}
