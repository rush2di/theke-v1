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
              coverture {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
    const { titre, date, coverture, description } = edge.node.frontmatter
    const { slug } = edge.node.fields
    return (
      <li className="postcard-wrapper" key={edge.node.id}>
        <ArticlePost
          title={titre}
          date={date}
          cover={
            !!coverture.childImageSharp
              ? coverture.childImageSharp.fluid.src
              : coverture
          }
          description={description}
          slug={slug}
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
