import React from "react"
import Layout from "../components/layout"
import PostsList from "../templates/postsList"
import { Helmet } from "react-helmet"

const Home = props => {
	const { group, first, last, index, pageCount } = props.pageContext
	return (
		<React.Fragment>
			<Helmet>
				<title>Accueil | Theke</title>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:title" content={"Accueil | Theke"} />
				<meta
					property="og:description"
					content={"theke blog de recherche scientifique"}
				/>
			</Helmet>
			<Layout activeNavItem1={true}>
				<PostsList
					posts={group}
					first={first}
					last={last}
					index={index}
					pageCount={pageCount}
				/>
			</Layout>
		</React.Fragment>
	)
}

export default Home
