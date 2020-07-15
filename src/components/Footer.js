import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Thank you</h2>
      <p>
        If you'd like a copy of my resume, or if you'd just like to chat, please feel free to contact me. Check out my repository for this site below.
      </p>
      <ul className="icons">
        <li>
          <a
            href="https://github.com/rosebutch/portfolio"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contact</h2>
      <dl className="alt">
        <dt>Location</dt>
        <dd>Chicago, IL</dd>
        <dt>Email</dt>
        <dd>
          annafullstackdev@gmail.com
        </dd>
      </dl>

    </section>
    <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
