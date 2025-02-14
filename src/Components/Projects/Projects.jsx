import { FaCss3, FaGithub, FaLink, FaHtml5, FaReact} from "react-icons/fa";
import { TbBrandJavascript, TbBrandNodejs, TbBrandMongodb } from 'react-icons/tb'
import { SiTailwindcss, SiExpress,  } from 'react-icons/si'


import './Projects.css'
import numquest from '../../assets/projects/numquest.png'
import password from '../../assets/projects/password.png'
import portfolio from '../../assets/projects/portfolio.png'
import amazonImage from '../../assets/projects/huddle.png'
import PropTypes from 'prop-types'


export default function Projects({projectsRef}) {
  return (
    <section id="projects" ref={projectsRef}>
      <h5>My work</h5>
      <h2>Projects</h2>

      <div className="container projectContainer">

       

        

        <div className="projectCard">
          <div className="img">
            <img src={numquest} alt="" />
          </div>
          <div className="techs">
            <FaReact /> <SiTailwindcss /> <SiExpress /> <TbBrandNodejs /> <TbBrandMongodb />
          </div>
          <p>NumQuest</p>
          <div className="btns">
            <a target="_blank" href="https://flourishing-dasik-b236e2.netlify.app/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/vivekguptacoder/NumQuest"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>
        
        
        <div className="projectCard">
          <div className="img">
            <img src={portfolio} alt="" />
          </div>
          <div className="techs">
            <FaHtml5 /> <FaCss3 /> <TbBrandJavascript />
          </div>
          <p>Personal Portfolio</p>
          <div className="btns">
            <a target="_blank" href=""><FaLink /> &nbsp;Live</a>
            <a target="_blank" href=""><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={password} alt="" />
          </div>
          <div className="techs">
            <FaHtml5 /> <FaCss3 /> <TbBrandJavascript />
          </div>
          <p>Password Generator</p>
          <div className="btns">
            <a target="_blank" href="https://extraordinary-pavlova-e67c74.netlify.app/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/vivekguptacoder/Password-Generator"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={amazonImage} alt="" />
          </div>
          <div className="techs">
            <FaHtml5 /> <FaCss3 />
          </div>
          <p>Amazon Clone</p>
          <div className="btns">
            <a target="_blank" href="https://aesthetic-bublanina-c985c8.netlify.app/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/vivekguptacoder/Amazon_clone"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>
      </div>
    </section>
  )
}


Projects.propTypes = {
  projectsRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};