// packages
import React from 'react'
// components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HelloScreen from '../components/HelloScreen'

export default function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <HelloScreen />
      </Layout>
    </>
  )
}
