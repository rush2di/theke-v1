import React from "react"
import Layout from "../components/layout"
import PostsList from "../templates/postsList"

const Home = props => {
	const { group, first, last, index, pageCount } = props.pageContext
  return (
    <Layout activeNavItem1={true}>    	
        <PostsList posts={group} first={first} last={last} index={index} pageCount={pageCount} />
    </Layout>
  )
}

export default Home
