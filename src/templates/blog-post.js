import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const BlogPost = props => {
  props && console.log(props)
  const { html } = props.data.markdownRemark
  const { coverture, titre } = props.data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className="article-wrapper">
        <div className="article_head">
          <img
            src={
              !!coverture.childImageSharp
                ? coverture.childImageSharp.fluid.src
                : coverture
            }
            alt={titre}
          />
          <h3>{titre}</h3>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
            fluid(maxWidth: 720, quality: 75) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
  }
`
