// packages
import React from 'react'
// components
import Layout from '../components/layout'
import SEO from '../components/SEO'
import ImagesGrid from '../components/images-grid'
import OurSocials from '../components/our-socials'
// utils
import { colors } from '../util/css-config'

export default function Home() {
  return (
    <>
      <SEO title="Наши проекты" description="Примеры выполненных работ" />
      <Layout>
        <ImagesGrid />
        <OurSocials bgColor={colors.medium} titleColor={colors.black} />
      </Layout>
    </>
  )
}
