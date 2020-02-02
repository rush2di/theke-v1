import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ArticlePost from "./articlePost"

const PostsList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              titre
              date(formatString: "Do MMMM YYYY", locale: "fr")
              description
              coverture {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 100) {
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
  // console.log(data)
  const postsProvider = data.allMarkdownRemark.edges.map(edge => {
    return (
      <li key={edge.node.id}>
        <ArticlePost
          title={edge.node.frontmatter.titre}
          date={edge.node.frontmatter.date}
          cover={edge.node.frontmatter.coverture}
          description={edge.node.frontmatter.description}
        />
      </li>
    )
  })
  console.log(data)
  return <ul>{postsProvider}</ul>
}

export default PostsList
