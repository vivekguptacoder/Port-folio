import './About.css'
import Me from '../../assets/utk.png'
import PropTypes from 'prop-types'

export default function About({aboutRef}) {
  return (
    <section id="about" ref={aboutRef}>
        <h5>Get to know me</h5>
        <h2>About Me</h2>

        <div className="container">
          <div className="aboutMe">
            <div className="aboutMeImage">
              <img src={Me} alt="" />
              {/* <div className="rt"></div> */}
            </div>
            <div className="aboutMeInfo">
                <b>Innovative Full Stack Developer Specializing in MERN Stack and Real-Time Applications.</b> <br /><br />
                <p>
                I'm pursuing B.Tech and full-stack developer skilled in Java, JavaScript, React, and Tailwind CSS. With hands-on experience in the MERN stack, I excel at creating responsive, dynamic applications, and integrating complex backends with MongoDB. During my internship at Hunt the Career, I developed engaging user interfaces using React native expo. My strong problem-solving skills and technical versatility enable me to tackle challenges across the stack, turning innovative ideas into impactful solutions. I thrive in collaborative environments and am committed to continuous learning to drive value for the team.
                </p>
              <a className='btn' href="#contact">Let&apos;s Connect</a>
            </div>
          </div>
        </div>      
    </section>
  )
}

About.propTypes = {
  aboutRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
