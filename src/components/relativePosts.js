import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { PostsBoxs } from "./featuredPosts"

const RelativePosts = ({ targetTags, title }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              titre
              description
              tags
              titre
              coverture {
                childImageSharp {
                  fluid(maxWidth: 1200) {
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

  let notActivePosts = data.allMarkdownRemark.edges.filter(edge => {
    return edge.node.frontmatter.titre !== title
  })
  let postsArr = []
  for (let edge in notActivePosts) {
    const { tags } = notActivePosts[edge].node.frontmatter
    for (let tag of targetTags) {
      if (tags.includes(tag)) {
        postsArr = [...postsArr, notActivePosts[edge]]
      }
    }
    if (postsArr.length > 3) {
      break
    }
  }

  return (
    !!postsArr.length && (
      <div>
        <div className="featured-posts">
          {postsArr.map(post => {
            const { titre, description, coverture } = post.node.frontmatter
            const { slug } = post.node.fields
            return (
              <PostsBoxs
                key={`card_${post.node.id}`}
                titre={titre}
                description={description}
                coverture={coverture}
                slug={slug}
                type={"article similaire"}
              />
            )
          })}
        </div>
      </div>
    )
  )
}

export default RelativePosts
