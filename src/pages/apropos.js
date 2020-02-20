import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Apropos = () => {
	const data = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "informations" } } }
			) {
				edges {
					node {
						frontmatter {
							informations {
								paragraph1
								paragraph2
								image1 {
									childImageSharp {
										fluid(maxWidth: 1200) {
											...GatsbyImageSharpFluid
										}
									}
								}
								image2 {
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
		}
	`)

	const {
		paragraph1,
		paragraph2,
		image1,
		image2,
	} = data.allMarkdownRemark.edges[0].node.frontmatter.informations

	return (
		<React.Fragment>
			<Helmet>
				<title>À propos | Theke</title>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:title" content={"À propos | Theke"} />
				<meta
					property="og:description"
					content={"à propos de notre blog Theke"}
				/>
			</Helmet>
			<Layout>
				<AproposPreview
					paragraph1={paragraph1}
					paragraph2={paragraph2}
					img1={image1}
					img2={image2}
				/>
			</Layout>
		</React.Fragment>
	)
}

export default Apropos

export const AproposPreview = ({ paragraph1, img1, paragraph2, img2 }) => {
	const firstBg = !!img1.childImageSharp 
		? img1.childImageSharp.fluid.src
		: img1
	const secondBg = !!img2.childImageSharp
		? img2.childImageSharp.fluid.src
		: img2

	return (
		<div className="section">
			<h3>à propos de nous</h3>
			<div className="grid-table">
				<div
					className="left about-img"
					style={{ backgroundImage: `url(${firstBg})`, gridArea: "img1" }}
					alt="apropos1"
				/>
				<p style={{ gridArea: "txt1" }}>{paragraph1}</p>
				<p style={{ gridArea: "txt2" }}>{paragraph2}</p>
				<div
					className="right about-img"
					style={{ backgroundImage: `url(${secondBg})`, gridArea: "img2" }}
					alt="apropos2"
				/>
			</div>
		</div>
	)
}
