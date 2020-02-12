import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const Aside = ({ posts }) => {
  const recentPosts = posts.slice(0, 4).map((edge, i) => {
    const { slug } = edge.node.fields
    const { titre } = edge.node.frontmatter
    return (
      <li key={i + "_post"}>
        <Link to={`article/${slug}`}>{titre}</Link>
      </li>
    )
  })

  return (
    <div className="aside-box">
      <div className="aside-box_tags">
        <span>catégories</span>
        <ul>
          <FiltredTags posts={posts} />
        </ul>
      </div>
      <div className="aside-box_recent">
        <span>postes recents</span>
        <ul>{recentPosts}</ul>
      </div>
      <div className="aside-box_search">
        <span>recherche</span>
        <SearchBar posts={posts} />
      </div>
    </div>
  )
}

export default Aside

export const FiltredTags = ({ posts }) => {
  const tagList = posts.map(edge => edge.node.frontmatter.tags)
  const mappedTags = [].concat(...tagList)
  const filtred = mappedTags.filter((a, i) => mappedTags.indexOf(a) === i)
  return (
    !!filtred.length &&
    filtred.map((tag, i) => (
      <li key={i + "_tag"}>
        <Link to={`articles/${tag}`}>{tag}</Link>
      </li>
    ))
  )
}

export const SearchBar = ({ posts }) => {
  const [state, setState] = useState([])
  const handleChange = e => {
    e.preventDefault()
    const input = e.target.value
    if (e.target.value.length > 3) {
      const res = posts.filter(edge => {
        const { titre, tags } = edge.node.frontmatter
        if (titre.search(input) !== -1 || tags.includes(input)) {
          return true
        }
      })
      setState(res)
    }
  }

  console.log(state)
  return (
    <div>
      <input onChange={handleChange} type="text" placeholder="recherche" />
      {!!state.length && (
        <div>
          <ul>
            {state.map(edge => {
              const { slug, id } = edge.node.fields
              const { titre } = edge.node.frontmatter
              return (
                <li key={`sug_${id}`}>
                  <Link to={`article/${slug}`}>{titre}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
