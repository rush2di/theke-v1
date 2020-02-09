import React from "react"
import { Link } from "gatsby"
import thekeLogo from "../../static/thekeLogo.svg"

const Navbar = ({active}) => {
  return (
    <nav>
      <div className="theke">
        <Link to="/">
          <img src={thekeLogo} alt="theke" />
        </Link>
      </div>
      <ul>
        <li>
          <Link activeClassName="active" to="/">
            accueil
          </Link>
        </li>
        <li>
          <Link className={active===true ? "active": ""} activeClassName="active" to="/articles">
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
