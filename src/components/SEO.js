import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useMatch } from '@reach/router'

const SEO = ({ title, description }) => {
  const index = useMatch('/')

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={index ? data.site.siteMetadata.title : `${title} | ${data.site.siteMetadata.title}`}>
        <meta name="description" content={description || data.site.siteMetadata.description} />
      </Helmet>
    </>
  )
}

export default SEO
