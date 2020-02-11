import React from "react"
import Layout from "../components/layout"
import PostsList from "../templates/postsList"

const Home = props => {
	console.log("meh",props)
  return (
    <Layout>    	
        <PostsList posts={props.pageContext.group} />
    </Layout>
  )
}

export default Home
