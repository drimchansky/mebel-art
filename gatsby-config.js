require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Мебель Арт',
    description: 'Купить кухню по индивидуальному дизайн-проекту, город Ярославль',
    url: 'https://furniture-art-yaroslavl.ru',
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        minify: false,
        transpileTemplateLiterals: false,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `d5gbiizsd4dt`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#f9bc60`,
        showSpinner: false,
        minimum: 0.2,
      },
    },

    `gatsby-plugin-material-ui`,
  ],
}
