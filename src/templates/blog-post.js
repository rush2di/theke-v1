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
          <div className="article_share">
            <span>partager l'article</span> 
            <ShareButtons slug={slug} />
          </div>
          <div className="article_relative">
            <RelativePosts title={titre} targetTags={tags} />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default BlogPost

export const ShareButtons = ({slug}) => {
  return (
    <React.Fragment>
      <a
        className="resp-sharing-button__link"
        href={`https://facebook.com/sharer/sharer.php?u=https://theke.netlify.com/article${slug}`}
        target="_blank"
        rel="noopener"
        aria-label="Facebook"
      >
        <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium">
          <div
            aria-hidden="true"
            className="resp-sharing-button__icon resp-sharing-button__icon--solid"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
            </svg>
          </div>
          Facebook
        </div>
      </a>
      <a
        className="resp-sharing-button__link"
        href={`https://twitter.com/intent/tweet/?url=url=https://theke.netlify.com/article${slug}`}
        target="_blank"
        rel="noopener"
        aria-label="Twitter"
      >
        <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--medium">
          <div
            aria-hidden="true"
            className="resp-sharing-button__icon resp-sharing-button__icon--solid"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
            </svg>
          </div>
          Twitter
        </div>
      </a>
      <a
        className="resp-sharing-button__link"
        href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=source=https://theke.netlify.com/article${slug}&amp;source=https://theke.netlify.com`}
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
      >
        <div className="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--medium">
          <div
            aria-hidden="true"
            className="resp-sharing-button__icon resp-sharing-button__icon--solid"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
            </svg>
          </div>
          LinkedIn
        </div>
      </a>
    </React.Fragment>
  )
}

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
