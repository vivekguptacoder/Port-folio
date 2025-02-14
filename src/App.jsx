import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { FaArrowAltCircleUp, FaHome, FaUser } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'
import { GrContactInfo, GrProjects } from 'react-icons/gr'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import './App.css'

export default function App() {

  const[activeSection, setActiveSection] = useState('home');


  const [homeRef, homeInView] = useInView();
  const [aboutRef, aboutInView] = useInView();
  const [experienceRef, experienceInView] = useInView();
  const [projectsRef, projectsInView] = useInView();
  const [contactRef, contactInView] = useInView();

  useEffect(() => {

      if (homeInView) setActiveSection('home');
      else if (aboutInView) setActiveSection('about');
      else if (experienceInView) setActiveSection('experience');
      else if (projectsInView) setActiveSection('projects');
      else if (contactInView) setActiveSection('contact');
  }, [homeInView, aboutInView, experienceInView, projectsInView, contactInView]);

  return(

    <>
      <nav>
        <a onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''} href="#home" ref={homeRef}><FaHome/></a>
        <a onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''} href="#about" ref={aboutRef}><FaUser /></a>
        <a onClick={() => setActiveSection('experience')} className={activeSection === 'experience' ? 'active' : ''} href="#experience" ref={experienceRef}><GiSkills /></a>
        <a onClick={() => setActiveSection('projects')} className={activeSection === 'projects' ? 'active' : ''} href="#projects" ref={projectsRef}><GrProjects /></a>
        <a onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''} href="#contact" ref={contactRef}><GrContactInfo /></a>
      </nav>
            
      <div className="upArrow">
        <a href="#home"><FaArrowAltCircleUp /></a>
      </div>

      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Experience experienceRef={experienceRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  )
}