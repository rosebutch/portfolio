import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import codeHeaderImage from '../assets/images/code-header-image.png'

class Personal extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Personal Page Title" />
        <HeaderGeneric title="Personal"/>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={codeHeaderImage} alt="" /></span>
            <h2>Personal Life</h2>
            <p>I'm gay and a capricorn, etc.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Personal
