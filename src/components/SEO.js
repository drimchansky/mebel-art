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
          url
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={
          index
            ? `${data.site.siteMetadata.description} | ${data.site.siteMetadata.title}`
            : `${title}`
        }> 
        <meta name="description" content={description || data.site.siteMetadata.description} />

        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:description" content={data.site.siteMetadata.description} />
        <meta property="og:image" content={`${data.site.siteMetadata.url}/images/preview.jpg`} />
        <meta property="og:url" content={data.site.siteMetadata.url} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    </>
  )
}

export default SEO
