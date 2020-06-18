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

export default function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <InfoLine />
        <Header />
        <BodyWrapper>
          <Main>Главная страница</Main>
          <Footer />
        </BodyWrapper>
      </Layout>
    </>
  )
}
