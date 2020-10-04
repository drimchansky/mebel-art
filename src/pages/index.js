// packages
import React from 'react'
// components
import Layout from '../components/layout/layout'
import SEO from '../components/SEO'
import HelloScreen from '../components/section/hello-screen'
import Cards from '../components/section/cards'
import Greetings from '../components/section/greetings'

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
