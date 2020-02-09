const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

const makeRequest = (graphql, request) =>
    new Promise((resolve, reject) => {
        resolve(
            graphql(request).then(result => {
                if (result.errors) {
                    reject(result.errors)
                }
                return result
            })
        )
    })

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const getBlog = makeRequest(
        graphql,
        `
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `
    ).then(res => {
        const posts = res.data.allMarkdownRemark.edges
        posts.forEach(edge => {
            const id = edge.node.id
            createPage({
                path: `article${edge.node.fields.slug}`,
                component: path.resolve("src/templates/blog-post.js"),
                context: {
                    id,
                },
            })
        })

        const tags = [
            "science",
            "biologie",
            "astrologie",
            "literature",
            "physcique",
            "chimie",
            "technologie",
            "environnement",
            "informatique",
            "biodiversite",
            "societe",
            "culture",
            "politiques",
            "décoverte",
            "exploration",
        ]

        tags.forEach(tag => {
            createPage({
                path: `articles/${tag}`,
                component: path.resolve("src/templates/articlePage.js"),
                context: { tag }
            })
        })
    })

    return Promise.all([getBlog])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    fmImagesToRelative(node)

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}