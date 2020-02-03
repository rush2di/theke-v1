import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const FeaturedPosts = ({ posts }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { id: { eq: "d757ace5-e87b-5428-9848-3c60dfac38ff" } }
      ) {
        edges {
          node {
            frontmatter {
              selection {
                post1
                post2
                post3
              }
            }
          }
        }
      }
    }
  `)
  const postlist = data.allMarkdownRemark.edges[0].node.frontmatter.selection
  const filtredPosts = posts.filter(edge => {
    if (edge.node.frontmatter.titre === postlist.post1) {
      return true
    }
    if (edge.node.frontmatter.titre === postlist.post2) {
      return true
    }
    if (edge.node.frontmatter.titre === postlist.post3) {
      return true
    }
    return false
  })

  return (
    <div className="featured-posts">
      {!!filtredPosts &&
        filtredPosts.map(post => {
          return (
            <div
              className="post-box"
              key={`card_${post.node.id}`}
              style={{
                backgroundImage: `url(${post.node.frontmatter.coverture})`,
              }}
            >
              <div className="over-box">
                <h3>{post.node.frontmatter.titre}</h3>
                <p>
                  {post.node.frontmatter.description.substring(0, 120) + "..."}
                </p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default FeaturedPosts
