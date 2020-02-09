import React from "react"
import Layout from "../components/layout"
import { PostsBoxs } from "../components/featuredPosts"
import {Link} from "gatsby"

export const ArticlePageLayout = ({data}) => {
	console.log(data, data)
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
		"décoverte",
		"exploration",
	]

	const tagsList = tags.map((tag, i) => {
		return (
			<li key={"tag_" + i}>
				<Link to={`articles/${tag}`}>{tag}</Link>
			</li>
		)
	})

	return (
		<Layout active={true}>
			<nav>
				<div>
					<Link to="articles">all</Link>
				</div>
				<ul>{tagsList}</ul>
			</nav>
			<div className="featured-posts">
			{ 
				!!data.edges.length ? data.edges.map(post => {
				return <PostsBoxs post={post} />
			}) : "aucun résultats n'a été trouvé"
		}
			</div>
		</Layout>
	)
}


const ArticlePage = props => {
	const {allMarkdownRemark:data} = props.data
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
        frontmatter{
          tags
          titre
          description
          coverture{
            childImageSharp{
              fluid(maxWidth: 1200){
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

