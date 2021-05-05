import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import personalHeaderImage from '../assets/images/sophie-the-cat.jpg'

class Personal extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Personal" />
        <HeaderGeneric title="Personal"/>
        <div id="main">
          <section id="content" className="main">
            <ul>
              <li>I'm proud to be a lesbian, and I'll always support my siblings in the LGBT community in any way that I can. 🌈</li>
              <li>I love learning languages. Estudiaba español y linguísticas en la universidad, y sigo estudiando y aprendiendo todo que puedo sobre cualquier lenguaje en una manera personal. Si quisieras, habla conmigo. 🗣</li>
              <li>I have a cat named Sophie, pictured below. 🐈</li>
              <li>I love to cook with my girlfriend- lately we've been getting a lot of use out of our pressure cooker. I'm happy to trade recipes! 🥘</li>
              <li>I listen to Carly Rae Jepsen every day. I'd gladly accept any pop music recommendations. 🎶</li>
              <li>I'm interested in astrology. Let's chat about our charts! 🪐 </li>
            </ul>
            <span className="image"><img src={personalHeaderImage} alt="" /></span>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Personal
