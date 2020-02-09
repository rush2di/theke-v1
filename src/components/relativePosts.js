import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { PostsBoxs } from "./featuredPosts"

const RelativePosts = ({ targetTags, title }) => {
    const data = useStaticQuery(graphql `
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
                console.log(true)
                postsArr = [...postsArr, notActivePosts[edge]]
                console.log(postsArr)
            }
        }
        if (postsArr.length > 3) {
            break
        }
    }

    //   console.log(relativePosts())
    return (
        !!postsArr.length && (
            <div>
        <h3>
          {postsArr.length > 1 ? "Articles Similaires" : "Article Similaire"}
        </h3>
        <div className="featured-posts">
          {postsArr.map(post => {
            return (
              <PostsBoxs post={post} />
            )
          })}
        </div>
      </div>
        )
    )
}

export default RelativePosts