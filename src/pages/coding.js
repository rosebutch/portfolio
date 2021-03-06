import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import codeHeaderImage from '../assets/images/code-header-image.png'
import SkillLevel from '../components/SkillLevel'
import {skills} from '../resume'

class Coding extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Coding" />
        <HeaderGeneric title="Coding"/>
        <div id="main">
          <section id="content" className="main">
            <h2>Libraries, Frameworks, and Languages Ranked by Proficiency</h2>
            <ul className="features">
              {skills.map((skillLevel, index) => <SkillLevel key={5 - index} stars={5 - index} skillArr={skillLevel} />)}
            </ul>
            <h2>Soft Coding Skills</h2>
            <ul>
              <li>I'm great at helping people feel comfortable and focus the task at hand.</li>
              <li>I'm an expert at explaining technical concepts without overwhelming with the details. I also have developed good debugging instincts to dig through the details more effectively.</li>
              <li>I love to code as a team, and I live by <a href="https://www.shinetheory.com/">Aminatou Sow and Ann Friedman's Shine Theory</a> of mutual investment and collaboration.</li>
            </ul>
            <span className="image main"><img src={codeHeaderImage} alt="" /></span>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Coding
