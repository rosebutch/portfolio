import React, {useState} from 'react'
import { projects } from '../resume'
const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(projects.kite)
  return (
    <section id="projects" className="main special">
      <header className="major">
        <h2>Projects</h2>
        <p>Click the titles below for more detailed information.</p>
      </header>
      <ul className="statistics">
      {Object.values(projects).map(project => (
        <li className={"style" + project.style} key={project.title}>
          <div onClick={() => setSelectedProject(project)}>
            <span className={"icon fa-" + project.icon}></span>
            <strong>{project.title}</strong> {project.subtitle}
          </div>

        </li>
      ))}
      </ul>
      <p className="content">
        <strong>{selectedProject.title} - {selectedProject.subtitle}</strong>
        <br/>
        <a href={selectedProject.repo} >
        <u>See the code here <span className="icon fa-github"></span></u>
        </a>
        <br/>
        {selectedProject.link && <a href={selectedProject.link} > <u>See it in action here <span className={"icon fa-" + selectedProject.icon}></span></u> <br/>
        </a>}
        {selectedProject.youtube && <a href={selectedProject.youtube} ><u>Watch our demo here <span className={"icon fa-youtube-play"}></span> </u><br/>
        </a>}
        {selectedProject.mintbean && <a href={selectedProject.mintbean} ><u>See the hackathon here <span className={"icon fa-comments-o"}></span> </u><br/>
        </a>}
        {selectedProject.description}
      </p>
    </section>
  )
}

export default Projects
