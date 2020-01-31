import React from "react"

const ArticlePost = ({ title, date, cover, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <blockquote>{date}</blockquote>
      <img src={cover} alt="cover" />
      <p>{description}</p>
    </div>
  )
}

export default ArticlePost
