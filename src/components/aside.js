import React, { useState } from "react"
import Autosuggest from 'react-autosuggest'
import { Link, navigate } from "gatsby"

const Aside = ({ posts }) => {
  const recentPosts = posts.slice(0, 4).map((edge, i) => {
    const { slug } = edge.node.fields
    const { titre } = edge.node.frontmatter
    return (
      <li key={i + "_post"}>
        <Link to={`/article/${slug}`}>{titre}</Link>
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
        <Link to={`/articles/${tag}`}>{tag}</Link>
      </li>
    ))
  )
}

export const SearchBar = ({ posts }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const postsData = posts.map(post => {
    return { 
    name: post.node.frontmatter.titre,
    slug: post.node.fields.slug,
    tags: post.node.frontmatter.tags
    }
  })

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0 ? [] : postsData.filter( post =>{
    return post.name.search(inputValue) !== -1 || post.tags.includes(inputValue)
    })
  }

  const getSuggestionValue = suggestion => {
    return suggestion.name
  }

  const renderSuggestion = suggestion => {
    return suggestion.name
  }

  const handleChange = (_, {newValue}) => {
    setValue(newValue)
  }

  const onSuggestionsFetchRequested = ({value}) => {
    setValue(value);
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const onSuggestionSelected = (_ ,{suggestion}) => {
    navigate(`article${suggestion.slug}`)
  }

  const inputProps = {
    placeholder: 'recherche',
    value,
    onChange: handleChange
  }
  
  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      onSuggestionSelected={onSuggestionSelected}
      />
    )
}
