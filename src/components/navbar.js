import React from "react"
import { Link } from "gatsby"
import thekeLogo from "../../static/thekeLogo.svg"

const Navbar = ({activeNavItem2, activeNavItem1}) => {
  return (
    <nav>
      <div className="theke">
        <Link to="/">
          <img src={thekeLogo} alt="theke" />
        </Link>
      </div>
      <ul>
        <li>
          <Link className={activeNavItem1===true ? "active": ""} activeClassName="active" to="/">
            accueil
          </Link>
        </li>
        <li>
          <Link className={activeNavItem2===true ? "active": ""} activeClassName="active" to="/articles">
            articles
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/apropos">
            à propos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
