import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import codeHeaderImage from '../assets/images/code-header-image.png'
import SkillLevel from '../components/SkillLevel'

class Coding extends React.Component {
  render() {
    const skills = [["JavaScript", "React (hooks and lifecycle methods)", "Redux", "Node.js", "Express", "PostgreSQL", "Sequelize", "Git", "HTML", "CSS", "Firebase Auth", "Firebase Realtime Database"], ["Mocha", "Chai", "Jasmine", "Python", "Bootstrap", "React Native", "NoSQL"],["Heroku", "socket.io", "Ephemeris", "Moment", "Firestore"]]
    return (
      <Layout>
        <Helmet title="Coding Page Title" />
        <HeaderGeneric title="Coding"/>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={codeHeaderImage} alt="" /></span>
            <h2>Libraries, Frameworks, and Languages Ranked by Proficiency</h2>
            <ul className="features">
              {skills.map((skillLevel, index) => <SkillLevel key={5 - index} stars={5 - index} skillArr={skillLevel} />)}
            </ul>
            <h2>Other Skills</h2>
            <p>I'm great at helping people feel comfortable and focus the task at hand. I'm an expert at explaining technical concepts without being overwhelmed by the details. I've also become fantastic at debugging by noticing all the details. I love to code as a team, and I live by <a href="https://www.shinetheory.com/">Aminatou Sow and Ann Friedman's Shine Theory</a> of mutual investment and collaboration. </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Coding
