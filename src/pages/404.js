import React from 'react'
import Layout from '../components/layout'
import barbie from '../assets/images/barbie.png'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
    <span className="image"><img src={barbie} alt="" /></span>

  </Layout>
)

export default NotFoundPage
