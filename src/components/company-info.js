// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// components
import Typography from './typography'

const CompanyInfo = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGeneralInfoAboutCompanyRichTextNode {
        edges {
          node {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  `).allContentfulGeneralInfoAboutCompanyRichTextNode.edges[0].node.childContentfulRichText.html

  console.log(data)

  return (
    <CompanyInfoStyled>
      <Typography html={data} />
    </CompanyInfoStyled>
  )
}

const CompanyInfoStyled = styled.section``

export default CompanyInfo
