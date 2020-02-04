import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ArticlePost from "./articlePost"

const PostsList = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            titre
            coverture
            date(formatString: "Do MMMM YYYY", locale: "fr")
            description
          }
        }
      }
    }
  }
  `)
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
  return (
    <section>
      <div>
        <ul style={{ listStyle: "none" }}>{postsProvider}</ul>
      </div>
    </section>
  )
}

export default PostsList
