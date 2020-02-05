import React from "react"

const Aside = ({ posts }) => {
  const tagList = posts.map(edge => edge.node.frontmatter.tags)
  const mappedTags = [].concat(...tagList)
  const filtred = mappedTags.filter((a, i) => mappedTags.indexOf(a) === i)
  const recentPosts = posts.slice(0, 4).map(edge => {
    return <li>{edge.node.frontmatter.titre}</li>
  })

  return (
    <div className="aside-box">
      <div className="aside-box_tags">
        <span>catégories</span>
        <ul>
          {filtred.map((tag, i) => (
            <li key={i + "_tag"}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="aside-box_recent">
        <span>postes recents</span>
        <ul>{recentPosts}</ul>
      </div>
    </div>
  )
}

export default Aside
