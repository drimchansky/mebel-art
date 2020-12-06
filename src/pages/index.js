// packages
import React from 'react'
// components
import Layout from '../components/layout'
import SEO from '../components/SEO'
import HelloScreen from '../components/hello-screen'
import Cards from '../components/cards'
import WorkSteps from '../components/work-steps'
import OurSocials from '../components/our-socials'
import Suppliers from '../components/suppliers'

export default function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <HelloScreen />
        <Cards />
        <WorkSteps />
        <OurSocials />
        <Suppliers />
      </Layout>
    </>
  )
}
