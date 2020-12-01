// packages
import React from 'react'
// components
import Layout from '../components/layout'
import SEO from '../components/SEO'
import ReviewsList from '../components/reviews/reviews-list'

export default function Rewiews() {
  return (
    <>
      <SEO title="Отзывы клиентов" description="Отзывы наших клиентов" />
      <Layout>
        <ReviewsList />
      </Layout>
    </>
  )
}
