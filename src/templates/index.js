import React from "react"
import Layout from "../components/layout"
import PostsList from "../templates/postsList"
import Pagination from "../components/pagination"

const Home = props => {
	const { group, first, last, index, pageCount } = props.pageContext
  return (
    <Layout activeNavItem1={true}>    	
        <PostsList posts={group} />
        <Pagination first={first} last={last} index={index} pageCount={pageCount} />
    </Layout>
  )
}

export default Home
