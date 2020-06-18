//
// Plugins order
//
// gatsby-transformer-sharp
// gatsby-plugin-sharp
// gatsby-transformer-sharp
// gatsby-source-filesystem
// gatsby-plugin-styled-components
//
//
//
//

module.exports = {
  siteMetadata: {
    title: 'Мебель Арт',
    description: 'Кухни по индивидуальным дизайн-проектам, город Ярославль',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        minify: false,
        transpileTemplateLiterals: false,
      },
    },
  ],
}
