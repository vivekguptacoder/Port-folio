
import './Home.css'
import Buttons from './Buttons'
import ME from '../../assets/me.png'
import Socials from './Socials/Socials'
import PropTypes from 'prop-types'

export default function Home({homeRef}) {

  return (
      <>
        <section id="home" ref={homeRef} className="container">
          <h5>Hello I&apos;m</h5>
          <h1>Vivek gupta</h1>
          <h5>Full Stack Developer</h5>
          <Buttons />
          <div className="socials">
            <Socials />
          </div>

          <div className="me">
            <img src={ME} width={200} alt="" />
          </div>

          <a href="#contact" className="scrollDown">Scroll Down</a>
          
        </section>
      </>
  )
}

Home.propTypes = {
  homeRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};