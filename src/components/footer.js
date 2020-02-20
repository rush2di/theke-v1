import React, { useContext } from "react"
import thekeLogo from "../../static/thekeLogo.svg"
import { Link } from "gatsby"
import iconFb from "../../static/assets/facebook.svg"
import iconIg from "../../static/assets/instagram.svg"
import { InfoContext } from "../context/infoContext"

const Footer = props => {
  const { informations } = useContext(InfoContext)
  const { aproposMini, email, telephone, facebook, instagram } = informations

  return (
    <FooterLayoutPreview
      apropos={aproposMini}
      email={email}
      telephone={telephone}
      instagram={instagram}
      facebook={facebook}
    />
  )
}

export const FooterLayoutPreview = ({
  apropos,
  telephone,
  email,
  instagram,
  facebook,
  preview,
}) => {
  const previewCheck = !!preview || <Link to="/apropos">savoirs plus</Link>

  return (
    <div className="footer">
      <div className="fgrid">
        <div className="logo">
          <img src={thekeLogo} alt="theke" />
        </div>
        <div className="apropos">
          <h3>à propos de nous</h3>
          <p>
            {apropos}
            <br />
            {previewCheck}
          </p>
        </div>
        <div className="contact">
          <h3>contactez nous</h3>
          <span>{telephone}</span>
          <span>{email}</span>
          <Social facebook={facebook} instagram={instagram} />
        </div>
      </div>
    </div>
  )
}

export const Social = ({ facebook, instagram }) => {
  return (
    <div className="social">
      {!!instagram && (
        <span>
          <a href={instagram}>
            <img src={iconIg} alt="instagram" />
          </a>
        </span>
      )}
      {!!facebook && (
        <span>
          <a href={facebook}>
            <img src={iconFb} alt="facebook" />
          </a>
        </span>
      )}
    </div>
  )
}

export default Footer
