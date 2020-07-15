import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import personalHeaderImage from '../assets/images/sophie-the-cat.jpg'

class Personal extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Personal Page Title" />
        <HeaderGeneric title="Personal"/>
        <div id="main">
          <section id="content" className="main">
            <span className="image"><img src={personalHeaderImage} alt="" /></span>
            <ul>
              <li>I'm proud to be a lesbian, and I'll always support my siblings in the LGBT community in any way that I can. 🌈</li>
              <li>I have a cat named Sophie after the main character of Howl's Moving Castle. She's pictured above. 🐈</li>
              <li>I love to play Dungeons & Dragons! I have quite the dice hoard. 🐉</li>
              <li>I love to cook with my girlfriend- lately we've been getting a lot of use out of our grill and Instant Pot. I'm happy to trade recipes! 🥘</li>
              <li>I listen to Carly Rae Jepsen every day. I'd gladly accept any pop music recommendations. 🎶</li>
              <li>I'm interested in astrology. Let's chat about our charts! 🪐 </li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Personal
