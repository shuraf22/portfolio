import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './Home.css'
import { Bounce } from 'react-awesome-reveal'
import { Link } from 'react-scroll'
import Particles from 'react-tsparticles'
import Typewriter from 'typewriter-effect'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'
import Navbar from '../navbar/Navbar'
import config from '../../config'
import profile from '../../images/Shura.png'

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <>
      <Helmet>
        <title>Shura – Cybersecurity Specialist & Architectural Designer | Home</title>

        <meta
          name="description"
          content="Hi, I'm Shura. A Cybersecurity Specialist and Architectural Designer, combining digital security with real-world structural design."
        />

        <meta
          name="keywords"
          content="Shura, cybersecurity specialist, ethical hacking, network security, architect, house design, building architecture, portfolio"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Shura – Cybersecurity & Architecture" />
        <meta
          property="og:description"
          content="Cybersecurity Specialist and Architectural Designer blending secure systems with solid structures."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://www.example.com/shura.jpg" />

        {/* Twitter */}
        <meta name="twitter:title" content="Shura – Cybersecurity & Architecture" />
        <meta
          name="twitter:description"
          content="Cybersecurity Specialist and Architectural Designer."
        />
        <meta name="twitter:image" content="https://www.example.com/shura.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Shura",
            "jobTitle": [
              "Cybersecurity Specialist",
              "Architectural Designer"
            ],
            "description":
              "Shura is a Cybersecurity Specialist and Architectural Designer, working across digital security and physical building design.",
            "image": "https://www.example.com/shura.jpg",
            "knowsAbout": [
              "Cybersecurity",
              "Network Security",
              "Ethical Hacking",
              "Risk Assessment",
              "Architectural Design",
              "Residential Architecture",
              "Building Planning",
              "AutoCAD",
              "3D Modeling"
            ]
          })}
        </script>
      </Helmet>

      <div className="home-wrapper">
        <div className="home">
          <Particles className="particles" params={config.particles} />

          <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
            <img
              className="profile"
              alt="Shura profile picture"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />

            <h1 className="greeting-text">
              Hi, I'm <span className="name">Shura</span>{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>

            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    'I secure digital systems.',
                    'I design houses and buildings.',
                    'I blend cyber safety with structural logic.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '_',
                  delay: 100,
                }}
              />
            </h1>

            <Bounce cascade>
              <div className="resume-container">
                <a
                  href="https://drive.google.com/file/d/118tktJ7k8d-mS9Scmm44UzQj4yC1yDoQ/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Shura resume"
                >
                  Download Resume
                </a>
              </div>
            </Bounce>

            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
                aria-label="Scroll to about section"
              >
                <ArrowDropDownCircleIcon
                  fontSize="large"
                  style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                />
              </Link>
            </div>
          </div>

          <Navbar />
        </div>
      </div>
    </>
  )
}

export default Home
