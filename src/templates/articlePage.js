import React from "react"
import Layout from "../components/layout"
import { PostsBoxs } from "../components/featuredPosts"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

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
		<Link activeClassName="active" to={`/articles/${tag}`}>
		{tag}
		</Link>
	      </li>
	)
})

return (
   <React.Fragment>
	   <Helmet>
	   <title>Articles | Theke</title>
	   <meta charset="utf-8" />
	   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	   <meta property="og:title" content={"Articles | Theke"} />
	   <meta property="og:description" content={"Theke page des articles"} />
	   </Helmet>
	   <Layout activeNavItem2={true}>
	        <nav className="articles_nav">
		    <ul>
		      <li>
		         <Link activeClassName="active" to="/articles">
		         tout
		         </Link>
		       </li>
		       {tagsList}
		     </ul>
		  </nav>
		  <div className="featured-posts">
		  {!!data.edges.length &&
		         data.edges.map(post => {
			 const { titre, description, coverture } = post.node.frontmatter
			 const { slug } = post.node.fields
			 return (
			      <PostsBoxs
		               key={`key_${post.node.id}`}
		               titre={titre}
		               description={description}
		               coverture={coverture}
		               slug={slug}
		               />						
		   )})}
		   </div>
		   {!!data.edges.length || (
		      <div className="articles_msg">
		      Opps! Aucun article n'est actuellement disponible pour cette catégorie
		      </div>
		   )}
	   </Layout>
   </React.Fragment>
)}

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
					id
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
