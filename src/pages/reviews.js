// packages
import React from 'react'
// components
import Layout from '../components/layout'
import SEO from '../components/SEO'
import ReviewsList from '../components/reviews/reviews-list'
import OurSocials from '../components/our-socials'
// utils
import { colors } from '../util/css-config'

export default function Rewiews() {
  return (
    <>
      <SEO title="Отзывы клиентов" description="Отзывы наших клиентов" />
      <Layout>
        <ReviewsList />
        <OurSocials bgColor={colors.medium} titleColor={colors.black} />
      </Layout>
    </>
  )
}
