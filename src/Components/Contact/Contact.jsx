import { MdEmail } from 'react-icons/md'
import {  FaWhatsapp } from 'react-icons/fa'
import './Contact.css'
import PropTypes from 'prop-types'

export default function Contact({contactRef}) {
  return (
    <section ref={contactRef} id="contact">
        <h5>Get in touch</h5>
        <h2>Contact Me</h2>

        <div className="container">

          <div className="contactContainer">
            <aside>
              <div className="email">
                <div className="icon"><MdEmail /></div>
                <h4>Email</h4>
                <h5>vivekgupta17124@gmail.com</h5>
                <button onClick={() => window.open('mailto:vivekgupta17124@gmail.com', '_blank')}>Send a message</button>
              </div>
              <div className="whatsapp">
                <div className="icon"><FaWhatsapp /></div>
                <h4>Whatsapp</h4>
                <h5>+91 8120604638</h5>              
                <button onClick={() => window.open('https://wa.me/8120604638', '_blank')}>Send a message</button>
              </div>
             
            </aside>

            <form action="">
              <input id='name' name='name' type="text" placeholder='Your name' />
              <input id='email' name='email' type="text" placeholder='Your Email' />
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message...'></textarea> 
              <button type='submit'>Send Message</button>           
            </form>
          </div>
        </div>
    </section>
  )
}

Contact.propTypes = {
  contactRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};