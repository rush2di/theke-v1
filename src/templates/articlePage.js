import React from "react"
import Layout from "../components/layout"
import { PostsBoxs } from "../components/featuredPosts"
import { Link, graphql } from "gatsby"

export const ArticlePageLayout = ({ data }) => {
	const tags = [
		"science",
		"biologie",
		"astrologie",
		"literature",
		"physcique",
		"chimie",
		"technologie",
		"environnement",
		"informatique",
		"biodiversite",
		"societe",
		"culture",
		"politiques",
		"decoverte",
		"exploration",
	]

	const tagsList = tags.map((tag, i) => {
		return (
			<li key={"tag_" + i}>
				<Link activeClassName="active" to={`articles/${tag}`}>
					{tag}
				</Link>
			</li>
		)
	})

	return (
		<Layout activeNavItem2={true}>
			<nav className="articles_nav">
				<ul>
					<li>
						<Link activeClassName="active" to="articles">
							tout
						</Link>
					</li>
					{tagsList}
				</ul>
			</nav>
			<div className="featured-posts">
				{!!data.edges.length &&
					data.edges.map(post => <PostsBoxs post={post} />)}
			</div>
			{!!data.edges.length || (
				<div className="articles_msg">
					Opps! Aucun article n'est actuellement disponible pour cette catégorie
				</div>
			)}
		</Layout>
	)
}

const ArticlePage = props => {
	const { allMarkdownRemark: data } = props.data
	return <ArticlePageLayout data={data} />
}

export default ArticlePage

export const pageQuery = graphql`
	query BlogPostByTag($tag: String!) {
		allMarkdownRemark(filter: { frontmatter: { tags: { eq: $tag } } }) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						tags
						titre
						description
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
`
