import React from 'react'
import pic01 from '../assets/images/pic01.jpg'
import {intro} from '../resume'

const Intro = () => {
  return (
    <section id="intro" className="main">
      <div className="spotlight">
        <div className="content">
          <header className="major">
            <h2>Full Stack Developer</h2>
          </header>
          <p>{intro}</p>
        </div>
        <span className="image">
          <img src={pic01} alt="" />
        </span>
      </div>
    </section>
  )
}

export default Intro
