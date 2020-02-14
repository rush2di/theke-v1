import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import RelativePosts from "../components/relativePosts"
import { Helmet } from "react-helmet"

const BlogPost = props => {
  const rootUrl = "https://theke.netlify.com"
  const { slug } = props.data.markdownRemark.fields
  const { html } = props.data.markdownRemark
  const {
    coverture,
    titre,
    tags,
    description,
  } = props.data.markdownRemark.frontmatter
  const bgImage = !!coverture.childImageSharp
    ? coverture.childImageSharp.fluid.src
    : coverture
  return (
    <React.Fragment>
      <Helmet>
        <title>{titre} | Theke</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={`${titre} | Theke`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${rootUrl}${bgImage}`} />
        <meta property="og:url" content={`${rootUrl}/article${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="fr_FR" />
        <link rel="canonical" href={`${rootUrl}/article${slug}`} />
      </Helmet>
      <Layout>
        <div className="article_wrapper">
          <div className="article_head">
            <div
              className="article_head--bg"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
            <h3>{titre}</h3>
          </div>
          <div
            className="article_body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="article_relative">
            <RelativePosts title={titre} targetTags={tags} />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        titre
        description
        tags
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
