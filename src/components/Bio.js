import React from 'react'
import { bio } from "../resume"

const Extra = () => {
  return (
    <section id="bio" className="main special">
      <header className="major">
        <h2>How I Got Here</h2>
      </header>
      <p style={{textAlign: 'justify'}}>{bio}</p>
    </section>
  )
}

export default Extra
