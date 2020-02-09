import React from "react"
import { ArticlePageLayout } from "../templates/articlePage"
import {graphql, useStaticQuery} from "gatsby"

const Articles = (props) => {
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
	
	console.log(props,data)
  // return <ArticlePageLayout data={} />
  return (<div>hi</div>)
}



export default Articles
