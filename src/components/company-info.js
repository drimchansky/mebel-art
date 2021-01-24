// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// components
import Typography from './typography'
// utils
import { colors } from '../util/css-config'
import { contentfulRichTextTransform } from '../util/funcs'

const CompanyInfo = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulGeneralInfo {
        edges {
          node {
            about_company {
              raw
            }
          }
        }
      }
    }
  `).allContentfulGeneralInfo.edges[0].node.about_company.raw

  return (
    <SCompanyInfo>
      <Typography html={contentfulRichTextTransform(data)} />
    </SCompanyInfo>
  )
}

const SCompanyInfo = styled.section`
  background: ${colors.white};
  border-radius: 5px;
  padding: 1rem 2rem;
`

export default CompanyInfo
