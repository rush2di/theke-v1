import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const BlogPost = props => {
  props && console.log(props)
  return (
    <Layout>
      <div className="article-wrapper">
        Hello
      </div>
    </Layout>
  )
}


export default BlogPost
