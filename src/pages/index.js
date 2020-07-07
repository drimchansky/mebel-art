// packages
import React from 'react'
// components
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'
import HelloScreen from '../components/section/HelloScreen'
import Cards from '../components/section/Cards'
import Greetings from '../components/section/Greetings'

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
