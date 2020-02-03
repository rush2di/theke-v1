import React from "react"

const ArticlePost = ({ title, date, cover, description }) => {
  return (
    <div className="postcard">
      <h1>{title}</h1>
      <blockquote>{date}</blockquote>
      <div style={{ backgroundImage: `url(${cover})` }} />
      <p>{description}</p>
    </div>
  )
}

export default ArticlePost
