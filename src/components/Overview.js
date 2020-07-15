import React from 'react'
import OverviewHighlight from './OverviewHighlight'

const Overview = () => {
  const highlights = [
    {
      topic: "Coding",
      content: "I love writing code in Javascript. Learn more about the other libraries and languages I've used here.",
      styles: "style1 fa-code"
    }, {
      topic: "Experience",
      content: "I've spent the last few months working as a teaching fellow at Fullstack. See my previous work experience here.",
      styles: "style2 fa-laptop"
    }, {
      topic: "Personal",
      content: "I love being a lesbian. I've found a diverse and thriving LGBT community here in Chicago. See more about me personally here.",
      styles: "style3 fa-venus-double"
    }
  ]
  return (
    <section id="overview" className="main special">
      <header className="major">
        <h2>Overview</h2>
      </header>
      <ul className="features">
        {highlights.map(highlight => <OverviewHighlight key={highlight.topic} {...highlight} />)}
      </ul>
    </section>
  )
}

export default Overview
