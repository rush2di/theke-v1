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
              title
              date
              description
              featuredpost
              featuredimage
            }
          }
        }
      }
    }
  `)
  console.log(data)
  const postsProvider = data.allMarkdownRemark.edges.map(edge => {
    return (
      <li key={edge.node.id}>
        <ArticlePost
          title={edge.node.frontmatter.title}
          date={edge.node.frontmatter.date}
          cover={edge.node.frontmatter.featuredimage}
          description={edge.node.frontmatter.description}
        />
      </li>
    )
  })
  console.log(data)
  return <ul>{postsProvider}</ul>
}

export default PostsList
