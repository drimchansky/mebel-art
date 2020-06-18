//
// Plugins order
//
// gatsby-transformer-sharp
// gatsby-plugin-sharp
// gatsby-transformer-sharp
// gatsby-source-filesystem
// gatsby-plugin-react-helmet
// gatsby-plugin-styled-components
// gatsby-plugin-nprogress
// gatsby-plugin-material-ui
// gatsby-theme-material-ui
//

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
