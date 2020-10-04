// packages
import React from 'react'
// components
import Layout from '../components/layout/layout'
import SEO from '../components/SEO'
import ImagesGrid from '../components/section/images-grid'

export default function Home() {
  return (
    <>
      <SEO title="Наши проекты" description="Примеры выполненных работ" />
      <Layout>
        <ImagesGrid />
      </Layout>
    </>
  )
}
