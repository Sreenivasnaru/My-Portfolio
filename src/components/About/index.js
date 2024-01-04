import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello, I'm Sreenivas Naru, an enthusiastic developer with a passion
            for both frontend design and full-stack development with a keen eye
            for design and a drive for creating exceptional user experiences. I
            specialize in turning ideas and concepts into beautifully crafted
            websites and web applications that not only look great but also
            function flawlessly.
          </p>
          <p>
            I approach each project with a blend of creativity and technical
            expertise. I pay meticulous attention to detail and strive for
            pixel-perfect precision in my work. The world of web development is
            constantly evolving, and I'm committed to staying up-to-date with
            the latest trends and best practices.{' '}
          </p>
          <p>
            Learning is a continuous process, and I'm committed to growing as a
            developer. I'm currently working on small projects to apply what
            I've learned and gain practical experience. I'm also eager to take
            on new challenges and absorb as much knowledge as I can.
          </p>
          <p>
            I'm always open to new opportunities and collaborations. Whether you
            have a project in mind, want to discuss the latest frontend
            technologies, or just want to connect with a fellow developer, feel
            free to reach out. Let's create amazing web experiences together!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#6e9e58" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCss3} color="#28A4d9" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
