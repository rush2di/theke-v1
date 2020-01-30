import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          developedBy
        }
      }
    }
  `)
  return (
    <Layout>
      <div>hello world</div>
      <div>
        {data.site.siteMetadata.title} developed by{" "}
        {data.site.siteMetadata.developedBy}
      </div>
    </Layout>
  )
}

export default Home
