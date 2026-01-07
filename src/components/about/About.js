import React from 'react'
import { Helmet } from 'react-helmet-async'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-awesome-reveal'
import Section from '../section/Section'
import Coding from '../../lottie/coding.json'
import DisplayLottie from '../DisplayLottie'

const About = () => {
  return (
    <>
      <Helmet>
        <title>Shura – Cybersecurity Specialist & Architectural Designer</title>
        <meta
          name="description"
          content="Hi! I'm Shura, a Cybersecurity Specialist and Architectural Designer, blending secure systems with structural design."
        />
        <meta
          name="keywords"
          content="Shura, cybersecurity specialist, ethical hacking, network security, architect, house design, building architecture, portfolio"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Shura – Cybersecurity & Architecture" />
        <meta
          property="og:description"
          content="Cybersecurity Specialist and Architectural Designer blending digital safety with structural design."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://www.example.com/shura.jpg" />

        {/* Twitter */}
        <meta name="twitter:title" content="Shura – Cybersecurity & Architecture" />
        <meta
          name="twitter:description"
          content="Cybersecurity Specialist and Architectural Designer blending digital safety with structural design."
        />
        <meta name="twitter:image" content="https://www.example.com/shura.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Shura",
            "jobTitle": ["Cybersecurity Specialist", "Architectural Designer"],
            "description": "Shura is a Cybersecurity Specialist and Architectural Designer, securing digital systems and designing real-world structures.",
            "image": "https://www.example.com/shura.jpg",
            "knowsAbout": [
              "Cybersecurity",
              "Network Security",
              "Ethical Hacking",
              "Architectural Design",
              "Residential Architecture",
              "Building Planning",
              "3D Modeling",
              "AutoCAD",
              "Project Management"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Punjab",
              "addressCountry": "IN"
            },
            "knowsLanguage": "English"
          })}
        </script>
      </Helmet>

      <Section title="About">
        <div className="about-content">
          <Fade duration={1000}>
            <div className="about-text">
              <h2>Who am I?</h2>
              <p>
                I'm Shura <span role="img" aria-label="smile">😄</span>
              </p>
              <p>
                <span role="img" aria-label="lightning">⚡</span>
                I am a Cybersecurity Specialist securing digital systems and an Architectural Designer creating safe and beautiful homes and buildings.
              </p>
              <p>
                <span role="img" aria-label="lightning">⚡</span>
                I have a background in Architecture and professional experience in cybersecurity.
              </p>
              <p>
                <span role="img" aria-label="lightning">⚡</span>
                I work with network security, ethical hacking, AutoCAD, AutoDesk Revit, Polycam, Rhino 3D, 3D modeling, Adobe Creative Suite and project planning.
              </p>
              <div className="typewriter">
                <p className="typewriter-start">
                  <span role="img" aria-label="lightning">⚡</span> I love
                </p>
                <Typewriter
                  options={{
                    strings: [
                      'designing secure systems',
                      'planning safe and beautiful structures',
                      'solving complex problems',
                      'learning new technologies',
                      'collaborating with teams'
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <p>.</p>
              </div>
              <p>
                Since 2022, I've been developing expertise in cybersecurity and architecture, working on projects that combine safety, efficiency, and aesthetic value.
              </p>
              <div className="location-wrapper">
                <svg
                  className="octicon octicon-location"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill="white"
                    fillRule="evenodd"
                    d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
                <p>Cameroon, Douala</p>
              </div>
            </div>
          </Fade>
          <div className="lottie-icon">
            <DisplayLottie animationData={Coding} />
          </div>
        </div>
      </Section>
    </>
  )
}

export default About
