// packages
import React from 'react'
// components
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'
import HelloScreen from '../components/ui/HelloScreen'
import Cards from '../components/ui/Cards'
import Greetings from '../components/ui/Greetings'

export default function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <HelloScreen />
        <Cards />
        <Greetings />
      </Layout>
    </>
  )
}
