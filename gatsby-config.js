//
// Plugins order
//
// gatsby-transformer-sharp
// gatsby-plugin-sharp
// gatsby-transformer-sharp
// gatsby-transformer-remark + gatsby-remark-images
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
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
