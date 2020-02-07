import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const BlogPost = props => {
  const { html } = props.data.markdownRemark
  const { coverture, titre } = props.data.markdownRemark.frontmatter
  const bgImage = !!coverture.childImageSharp
  ? coverture.childImageSharp.fluid.src
  : coverture
  return (
    <Layout>
      <div className="article_wrapper">
        <div className="article_head">
          <div className="article_head--bg" style={{backgroundImage: `url(${bgImage})`}}
          />
          <h3>{titre}</h3>
        </div>
        <div className="article_body" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        titre
        description
        coverture {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
  }
`
