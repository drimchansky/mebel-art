// packages
import React from 'react'
// components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import BodyWrapper from '../components/BodyWrapper'
import InfoLine from '../components/InfoLine'

export default function Contacts() {
  return (
    <>
      <SEO title="Наши контакты" description="Контакты т форма обратной связи" />
      <Layout>
        <InfoLine />
        <Header />
        <BodyWrapper>
          <Main>Страница контактов</Main>
          <Footer />
        </BodyWrapper>
      </Layout>
    </>
  )
}
