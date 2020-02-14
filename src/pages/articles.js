import React from "react"
import { ArticlePageLayout } from "../templates/articlePage"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const Articles = props => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              titre
              description
              tags
              titre
              coverture {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Helmet>
        <title>Articles | Theke</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={"Articles | Theke"} />
        <meta
          property="og:description"
          content={"Theke page des articles"}
        />
      </Helmet>
      <ArticlePageLayout data={data.allMarkdownRemark} />
    </React.Fragment>
  )
}

export default Articles
