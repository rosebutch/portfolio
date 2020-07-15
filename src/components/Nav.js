import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'projects', 'bio', 'overview'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Introduction</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="projects">
                    <a href="#">Projects</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="bio">
                    <a href="#">How I Got Here</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="overview">
                    <a href="#">Overview</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
