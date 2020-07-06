// packages
import React from 'react'
// components
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'
import Contacts from '../components/ui/Contacts'

export default function contacts() {
  return (
    <>
      <SEO title="Наши контакты" description="Контакты т форма обратной связи" />
      <Layout>
        <Contacts />
      </Layout>
    </>
  )
}
