import React,{useState,useEffect} from "react"
import { Link } from "gatsby"
import thekeLogo from "../../static/thekeLogo.svg"

const Navbar = ({ activeNavItem2, activeNavItem1 }) => {
  const [state,setState] = useState(false)
  const handleClick = () => setState(!state) 
  console.log(state)

  return (
    <nav>
      <div className="theke">
        <Link to="/">
          <img src={thekeLogo} alt="theke" />
        </Link>
      </div>
      <div className="nav_large-vp">
        <ul>
          <li>
            <Link
              className={activeNavItem1 === true ? "active" : ""}
              activeClassName="active"
              to="/"
            >
              accueil
            </Link>
          </li>
          <li>
            <Link
              className={activeNavItem2 === true ? "active" : ""}
              activeClassName="active"
              to="/articles"
            >
              articles
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/apropos">
              à propos
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav_small-vp">
        <button onClick={handleClick} className={`hamburger hamburger--spin ${!!state && "is-active"}`} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className="nav_small-vp--items">
          <ul>
            <li>
              <Link
                className={activeNavItem1 === true ? "active" : ""}
                activeClassName="active"
                to="/"
              >
                accueil
              </Link>
            </li>
            <li>
              <Link
                className={activeNavItem2 === true ? "active" : ""}
                activeClassName="active"
                to="/articles"
              >
                articles
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/apropos">
                à propos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
