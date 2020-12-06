// packages
import React from 'react'
// components
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Title from '../components/title'
import Container from '@material-ui/core/Container'
import CompanyInfo from '../components/company-info'
import OurSocials from '../components/our-socials'
import CustomBreadcrumbs from '../components/custom-breadcrumbs'
// utils
import { colors } from '../util/css-config'

export default function aboutCompany() {
  return (
    <>
      <SEO title="О нас" description="Информация о компании Мебель Арт" />
      <Layout>
        <Container maxWidth="md">
          <CustomBreadcrumbs currentPage="О компании" />
          <Title>
            <h1>О компании Мебель Арт</h1>
          </Title>
          <CompanyInfo />
        </Container>
        <OurSocials bgColor={colors.medium} titleColor={colors.black} />
      </Layout>
    </>
  )
}
