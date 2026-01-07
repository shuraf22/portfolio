import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-awesome-reveal'
import ContactForm from '../contactForm/ContactForm'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import instagram from '../../images/social/instagram.png'
import twitter from '../../images/social/twitter.png'
import Stackoverflow from '../../images/social/stackoverflow.png'

const Contact = () => {
  return (
    <Section title="Contact">
      <ContactForm />
      <Bounce cascade>
        <div className="links">
          <a
            href="https://cm.linkedin.com/in/shura-fon-ndikum-036209278"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>

          <a
            href="https://www.instagram.com/shura._f?igsh=MWk0OXQyNzQxaWs2Ng%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram Logo" width="40px" />
          </a>

          <a
            href="https://github.com/shuraf22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact
