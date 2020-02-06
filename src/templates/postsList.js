import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ArticlePost from "../components/articlePost"
import FeaturedPosts from "../components/featuredPosts"
import Aside from "../components/aside"

const PostsList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              titre
              coverture
              date(formatString: "Do MMMM YYYY", locale: "fr")
              description
              tags
            }
          }
        }
      }
    }
  `)
  const postsProvider = data.allMarkdownRemark.edges.map(edge => {
    return (
      <li className="postcard-wrapper" key={edge.node.id}>
        <ArticlePost
          title={edge.node.frontmatter.titre}
          date={edge.node.frontmatter.date}
          cover={edge.node.frontmatter.coverture}
          description={edge.node.frontmatter.description}
          slug={edge.node.fields.slug}
        />
      </li>
    )
  })
  return (
    <section>
      <FeaturedPosts posts={data.allMarkdownRemark.edges} />
      <div className="main-section">
        <ul style={{ listStyle: "none" }}>{postsProvider}</ul>
        <Aside posts={data.allMarkdownRemark.edges} />
      </div>
    </section>
  )
}

export default PostsList
