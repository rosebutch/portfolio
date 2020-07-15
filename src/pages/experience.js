import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import codeHeaderImage from '../assets/images/code-header-image.png'
import { experience } from "../resume"
import Job from '../components/Job'

class Experience extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Experience Page Title" />
        <HeaderGeneric title="Experience"/>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={codeHeaderImage} alt="" /></span>
            <h2>Professional Experience</h2>
            {experience.map(job=> <Job key={job.title} job={job} />)}
          </section>
        </div>
      </Layout>
    )
  }
}

export default Experience
