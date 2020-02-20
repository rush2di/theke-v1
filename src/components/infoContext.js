import React, { createContext } from "react"
import { useStaticQuery, graphql } from "gatsby"

export const InfoContext = createContext()

const InfoContextProvider = props => {
	const info = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "informations" } } }
			) {
				edges {
					node {
						frontmatter {
							informations {
								aproposMini
								email
								telephone
								facebook
								instagram
							}
						}
					}
				}
			}
		}
	`)
	const {informations} = info.allMarkdownRemark.edges[0].node.frontmatter
	
	return (
		<InfoContext.Provider value={{ informations }}>
			{props.children}
		</InfoContext.Provider>
	)
}

export default InfoContextProvider
