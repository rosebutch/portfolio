import { Link } from 'gatsby'
import React from 'react'

const OverviewHighlight = props => {
  const {topic, content, styles} = props
  const completeStyles = "icon major " + styles
  const slug = topic.toLowerCase()
  return (
    <li>
      <span className={completeStyles}></span>
      <Link to={`/${slug}`}><h3>{topic}</h3>
      <p>
        {content}
      </p>
      </Link>
    </li>
  )
}
export default OverviewHighlight
