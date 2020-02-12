import React from "react"
import { Link } from "gatsby"

const ArticlePost = ({ title, date, cover, description, slug }) => {
  return (
    <div className="postcard">
      <h1>{title}</h1>
      <blockquote>{date}</blockquote>
      <div
        className="postcard_img"
        style={{ backgroundImage: `url(${cover})` }}
      />
      <p>{description}</p>
      <div className="postcard_link">
        <Link to={`/article${slug}`}>
          continue la lecture <span>&#8594;</span>
        </Link>
      </div>
    </div>
  )
}

export default ArticlePost
