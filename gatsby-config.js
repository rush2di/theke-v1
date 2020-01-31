/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Theke",
    developedBy: "Rochdi Belhirch",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploads",
        path: `${__dirname}/static/img`,
      },
    },
  ],
}
