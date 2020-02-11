import React from "react"
import Layout from "../components/layout"
import PostsList from "../templates/postsList"
// import Pagination from "../components/pagination"

const Home = props => {
	console.log("meh",props)
	const { group } = props.pageContext
  return (
    <Layout>    	
        <PostsList posts={props.pageContext.group} />
    </Layout>
  )
}

export default Home
