import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import InfoContextProvider from "../context/infoContext"
import "./styles/index.scss"

const Layout = props => {
	return (
		<InfoContextProvider>
			<div className="container">
				<Navbar
					activeNavItem1={!!props.activeNavItem1}
					activeNavItem2={!!props.activeNavItem2}
				/>
				{props.children}
			</div>
			<Footer />
		</InfoContextProvider>
	)
}

export default Layout
