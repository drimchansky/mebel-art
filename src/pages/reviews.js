// packages
import React from 'react'
// components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import BodyWrapper from '../components/BodyWrapper'

export default function Rewiews() {
  return (
    <>
      <SEO />
      <Layout>
        <Header />
        <BodyWrapper>
          <Main>Главная с отзывами</Main>
          <Footer />
        </BodyWrapper>
      </Layout>
    </>
  )
}
