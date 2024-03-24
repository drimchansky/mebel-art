require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Мебель Арт',
    description: 'Купить кухню по индивидуальному дизайн-проекту, город Ярославль',
    siteUrl: 'https://mebel-art76.ru',
    year: new Date().getFullYear()
  },
  plugins: [
    `gatsby-plugin-pnpm`,
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
        displayName: process.env.MODE === 'development' ? true : false,
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
        color: `#1c5796`,
        showSpinner: false,
        minimum: 0.2,
      },
    },

    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
  ],
}
