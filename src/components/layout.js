import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "./styles/index.scss"
import { useStaticQuery, graphql } from "gatsby"

const Layout = props => {
	const data = useStaticQuery(graphql`
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
            paragraph1
            paragraph2
            image1 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            image2 {
              childImageSharp {
                fluid {
                  src
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
	console.log(props.children)
	return (
		<React.Fragment>
			<div className="container">
				<Navbar
					activeNavItem1={!!props.activeNavItem1}
					activeNavItem2={!!props.activeNavItem2}
				/>
				{props.children}
			</div>
			<Footer data={data} />
		</React.Fragment>
	)
}

export default Layout
