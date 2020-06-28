// packages
import React from 'react'
// components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HelloScreen from '../components/HelloScreen'
import Cards from '../components/Cards'
import Greetings from '../components/Greetings'

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
