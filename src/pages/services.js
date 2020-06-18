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

export default function Services() {
  return (
    <>
      <SEO
        title="Наши услуги"
        description="Услуги по проектированию и установке кухонь по индивидуальному дизайн-проекту"
      />
      <Layout>
        <InfoLine />
        <Header />
        <BodyWrapper>
          <Main>Страница с услугами</Main>
          <Footer />
        </BodyWrapper>
      </Layout>
    </>
  )
}
