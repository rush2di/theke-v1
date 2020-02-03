import React from "react"
import Layout from "../components/layout"
import PostsList from "../components/postsList"

const Home = () => {
  return (
    <Layout>
      <div>
        <PostsList />
      </div>
    </Layout>
  )
}

export default Home
